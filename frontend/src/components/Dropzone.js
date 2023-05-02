import React from "react";
import { useDropzone } from "react-dropzone";
import "./CreateDiagram.css";
import Button from "react-bootstrap/Button";
function Dropzone({ open }) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({});

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div {...getRootProps({ className: "dropzone" })}>
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center">
                {isDragActive ? (
                    <p className="dropzone-content">
                        Release to drop the files here
                    </p>
                ) : (
                    <p className="dropzone-content">
                        Drag’n’drop some files here, or click to select files
                    </p>
                )}
                <Button variant="outline-info">Select file</Button>
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>
        </div>
    );
}

export default Dropzone;