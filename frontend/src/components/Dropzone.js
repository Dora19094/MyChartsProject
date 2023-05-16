// import React from "react";
// import {useDropzone} from "react-dropzone";
// import "./NewChart.css";
// import Button from "react-bootstrap/Button";
//
// function Dropzone({open}) {
//     const {getRootProps, getInputProps, isDragActive, acceptedFiles} =
//         useDropzone({});
//
//     const files = acceptedFiles.map((file) => (
//         <li key={file.path}>
//             {file.path} - {file.size} bytes
//         </li>
//     ));
//     // ------------------------------------------------------------------------------------------------------
//     // after uploading csv press upload and download templates button and  navigate with the csv info to error chart page
//     return (
//         <div {...getRootProps({className: "dropzone"})}>
//             <input className="input-zone" {...getInputProps()} />
//             <div className="text-center">
//                 {isDragActive ? (
//                     <p className="dropzone-content">
//                         Release to drop the files here
//                     </p>
//                 ) : (
//                     <p className="dropzone-content">
//                         Select or drag file
//                     </p>
//                 )}
//                 <Button variant="outline-info">Select file</Button>
//             </div>
//             <aside>
//                 <ul>{files}</ul>
//             </aside>
//         </div>
//     );
// }
//
// export default Dropzone;
import {useState} from 'react';
import Dropzone from 'react-dropzone';
import Button from "react-bootstrap/Button";
import {useNavigate, useParams} from "react-router-dom";
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Papa from "papaparse";

export default function MyDropzone() {

    const navigate = useNavigate();
    const {credentials} = useParams();
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {

        // post FILE to backend
        console.log(acceptedFiles);
        // -------------------------------------------
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = async () => {

                // POST
                const formData = new FormData();
                formData.append("file", file, file.name);

                fetch("http://localhost:4001/create-chart/create", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        // Handle the response from the backend
                        console.log(response);
                    })
                    .catch((error) => {
                        // Handle errors
                        console.error(error);
                    });

                setFiles([...files, ...acceptedFiles]);

                // const requestOptions = {
                //     method: "POST",
                //     headers: {"Content-Type": "application/json"},
                //     body: JSON.stringify(parsedData.data),
                // };
                // const url = `http://localhost:4001/create-chart/create`
                // await fetch(url, requestOptions).then(
                //     // (response) => response.json() // provokes error, ok when commenting it out
                // );
                // reader.readAsText(file); // Pass the file object to readAsText
                //
                // setFiles([...files, ...acceptedFiles]);
                // console.log(files);


                //navigate(`/account/${credentials}/error`, {state: {file: file}});
            }
            //reader.readAsArrayBuffer(file)

        }) // accepted files
    }, [files]) // onDrop

    const {getRootProps, getInputProps} = useDropzone({onDrop})

    function handleDrop() {
        // Navigate to the target page and pass the file as a prop
        // navigate('/about', {state: {file: binaryStr}});
    }

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="d-flex-justify-content-center">
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <Button variant="outline-dark" onClick={handleDrop}> upload </Button>
        </div>
    )
}