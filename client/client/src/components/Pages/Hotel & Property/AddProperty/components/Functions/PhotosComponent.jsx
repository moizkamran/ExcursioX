import React, { useEffect, useState } from "react";
import { Button, Progress, Text } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import { useDispatch, useSelector } from "react-redux";
import { updatePropertyPhotos } from "../../../../../../Redux/Slicers/propertySlice";
import { storage } from "../../../../../../firebase";

import { AnimatePresence, motion } from "framer-motion";
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";


const PhotosComponent = () => {
  const dispatch = useDispatch();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFilePicked, setIsFilePicked] = useState(false);
  const fileTypes = ["image/png", "image/jpeg", "image/gif"];
  const [selectedFilesUrls, setSelectedFilesUrls] = useState([]);

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 12) {
      setErrorMessage("Maximum 12 images can be uploaded at a time.");
      return;
    }

    const selected = [];
    let errors = "";
    files.forEach((file) => {
      if (fileTypes.indexOf(file.type) === -1) {
        errors += `${file.name} is not a supported format.\n`;
        return;
      }
      if (file.size > 3024 * 3024) {
        errors += `${file.name} is too large, please pick a smaller file.\n`;
        return;
      }
      if (
        selectedFiles.some((selectedFile) => selectedFile.name === file.name)
      ) {
        errors += `${file.name} is already selected.\n`;
        return;
      }
      selected.push(file);
    });

    if (errors !== "") {
      setErrorMessage(errors);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }

    setSelectedFiles(selectedFiles.concat(selected));

    if (files.length === 0) {
      setIsFilePicked(false);
    } else {
      setIsFilePicked(true);
    }
  };

  const deleteFile = (fileToDelete) => {
    // Delete from Firebase storage
    const storageRef = ref(storage, fileToDelete);
    deleteObject(storageRef)
      .then(() => {
        console.log(`File ${fileToDelete} deleted from Firebase storage.`);
      })
      .catch((error) => {
        console.log(error);
      });
  
    // Remove from the selectedFiles state
  const filteredFiles = selectedFiles.filter((file) => file !== fileToDelete);
  setSelectedFiles(filteredFiles);

  // Remove from the photos state in Redux
  const filteredPhotos = selectedFilesUrls.filter((photo) => photo !== fileToDelete);
  dispatch(updatePropertyPhotos({ photos: filteredPhotos }));
  };
  

  const [updPerc, setPerc] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + selectedFiles[0].name;
  
      console.log(name);
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, selectedFiles[0]);
  
      uploadTask.on(
        "state_changed",
        (uploadTask) => {
          const progress = (uploadTask.bytesTransferred / uploadTask.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL)
            // Update selectedFilesUrls state
          setSelectedFilesUrls((prevUrls) => [...prevUrls, downloadURL]);
            // Dispatch the URL to the photos state
            dispatch(updatePropertyPhotos({ selectedFileUrl: downloadURL }));
          });
        }
      );
    };
  
    selectedFiles.length > 0 && uploadFile();
  }, [selectedFiles]);
  

  
  
  const photos = useSelector((state) => state.property.propertyPhotos.photos);
  

  const renderPhotos = (photos) => {
    return photos.map((photo) => {
      return (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          key={photo}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "red",
              display: "flex",
              direction: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15%",
              overflow: "hidden",
            }}
          >
            <img
              src={photo}
              alt={photo}
              style={{
                maxWidth: "150px",
                width: "auto",
                display: "flex",
                aspectRatio: "15/9",
                height: "auto",
                maxHeight: "auto",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
  
            <button
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                borderRadius: "50%",
                backgroundColor: "red",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => deleteFile(photo)}
            >
              &times;
            </button>
          </div>
        </motion.div>
      );
    });
  };
  

  return (
    <div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          height: "auto",
          width: "auto",
          borderRadius: 20,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          border: "2px dashed #07399E",
        }}
      >
        <label
          htmlFor="upload-files"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "#07399E",
              marginBottom: 10,
            }}
          >
            <IconUpload style={{ color: "#FFFFFF", fontSize: 30 }} />
          </div>
          <Text style={{ marginBottom: 5 }}>Upload Files</Text>
          <input
            type="file"
            id="upload-files"
            multiple
            onChange={handleFileInput}
            style={{ display: "none" }}
          />
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!isFilePicked && (
            <Text style={{ marginTop: 10, textAlign: "center", width: 500 }}>
              Maximum 12 images can be uploaded at a time. Supported formats:
              png, jpeg, gif. Maximum file size: 1MB.
            </Text>
          )}
          {errorMessage && (
            <Text className="animate-text" style={{ color: "red" }}>
              {errorMessage}
            </Text>
          )}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "100px",
            gridGap: 10,
            marginTop: 20,
          }}
        >
          {renderPhotos(photos)}
        </div>
      </div>
      <Progress color="dark" radius="xl" size="md" value={updPerc} striped animate />
      {/* <Button onClick={handleUpload} mt={5}>Submit</Button> */}
    </div>
  );
};

export default PhotosComponent;
