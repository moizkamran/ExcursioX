import { Text, Button } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import React, { useState } from "react";

const PhotosComponent = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isFilePicked, setIsFilePicked] = useState(false);
    const fileTypes = ["image/png", "image/jpeg", "image/gif"];

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
            if (file.size > 1024 * 1024) {
                errors += `${file.name} is too large, please pick a smaller file.\n`;
                return;
            }
            if (selectedFiles.some((selectedFile) => selectedFile.name === file.name)) {
                errors += `${file.name} is already selected.\n`;
                return;
            }
            selected.push(file);
            

        });
    
        if (errors !== "") {
            setErrorMessage(errors);
            setTimeout (() => {
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
        const filteredFiles = selectedFiles.filter((file) => file !== fileToDelete);
        setSelectedFiles(filteredFiles);
    };

    

    console.log(selectedFiles);
    console.log(isFilePicked);

    const renderPhotos = (photos) => {

        return photos.map((photo) => {
            return (
                <div
                    style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" }}
                    key={photo.name}
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
                            src={URL.createObjectURL(photo)}
                            alt={photo.name}
                            style={{
                                maxWidth: "150px",
                                width: "auto",
                                display: 'flex',
                                aspectRatio: "15/9",
                                height: "auto",
                                maxHeight: "auto",
                                objectFit: "cover",
                                objectPosition: "center center"
                            }}
                        />

                        <button
                            style={{
                                position: "absolute",
                                top: "5px",
                                right: "5px",
                                border: "none",
                                backgroundColor: "transparent",
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
                </div>
            );
        });
    };

    return (
        <div >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              height: 'auto',
              width: 'auto',
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {!isFilePicked &&(<Text style={{ marginTop: 10, textAlign: "center", width: 500 }}>
                    Maximum 12 images can be uploaded at a time. Supported formats: png, jpeg, gif. Maximum file size: 1MB.
                </Text>)}
                {errorMessage && <Text className="animate-text" style={{ color: "red" }}>{errorMessage}</Text>}
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
              {renderPhotos(selectedFiles)}
            </div>
          </div>
        </div>
      );
      
};

export default PhotosComponent;
