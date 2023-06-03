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
import Button from "react-bootstrap/Button";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import * as xlsx from "xlsx";

export default function MyDropzone() {

    const navigate = useNavigate();
    const {credentials} = useParams();
    const [files, setFiles] = useState([]);
    const [credits, setCredits] = useState([]);
    const minus = [1];
    const {state} = useLocation();

    if (credits) {
        const requestOptions = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credits),
        };
        const url = `https://localhost:3001/intelliq_api/`
        /*await*/
        fetch(url, requestOptions).then(
        );
        console.log(credits);
    }

    const onDrop = useCallback((acceptedFiles) => {

        // post FILE to backend
        console.log(acceptedFiles);
        // -------------------------------------------
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = async () => {
                console.log("in the onload method");
                const fileContent = reader.result;
                const workbook = xlsx.read(fileContent, {type: 'binary'});
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx.utils.sheet_to_json(worksheet, {header: 1, blankrows: false});

                // Send the JSON data to the backend
                try {
                    const response = await fetch('http://localhost:4001/create-chart/create', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${state.accessToken}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(jsonData),
                    });

                    if (response.ok) {
                        // Handle the successful response from the backend
                        console.log('Request sent successfully');
                        const data = await response.json();
                        console.log('Response:', data);
                        navigate(`/account/${credentials}/error`, {
                                state:
                                    {files: data}
                            }
                        );
                        // update setCredits(minus), minus being 1.
                        setCredits(minus);

                    } else {
                        // Handle the error response from the backend
                        console.log('Request failed:', response.status, response.statusText);
                        navigate(`/account/${credentials}/errormessage`,);
                    }
                } catch (error) {
                    // Handle network errors or other exceptions
                    console.error('An error occurred:', error);
                }
            };

            reader.readAsBinaryString(file);
        });

        setFiles([...files, ...acceptedFiles]);
    }, [files]);

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