import React, { useState } from "react";

const FunctionsComponent = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
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
            selected.push(file);
        });

        if (errors !== "") {
            setErrorMessage(errors);
            return;
        }

        setSelectedFiles(selectedFiles.concat(selected));
    };
    const deleteFile = (fileToDelete) => {
        const filteredFiles = selectedFiles.filter((file) => file !== fileToDelete);
        setSelectedFiles(filteredFiles);
    };

    const renderPhotos = (photos) => {
        const numPhotos = photos.length;
        const numRows = Math.ceil(numPhotos / 4);
        const cellWidth = 100 / 4; // Adjust to your preference
        const cellHeight = 200 / numRows; // Adjust to your preference

        return photos.map((photo) => {
            return (
                <div
                    key={photo.name}
                    style={{
                        width: `${cellWidth}%`,
                        height: `${cellHeight}px`,
                        position: "relative",
                    }}
                >
                    <div
                        style={{ position: "relative", width: "100%", height: "100%" }}
                    >
                        <img
                            src={URL.createObjectURL(photo)}
                            alt={photo.name}
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
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
        <div>
            <input type="file" multiple onChange={handleFileInput} />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "500px",
                    height: "200px",
                    border: "1px solid black",
                    marginTop: "10px",
                }}
            >
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                {renderPhotos(selectedFiles)}
            </div>
        </div>
    );
};

export default FunctionsComponent;
