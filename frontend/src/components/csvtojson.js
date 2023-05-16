import {parse} from "papaparse";
import {useState} from "react";
import Button from "react-bootstrap/Button";

export default function Parse() {

    const [data, setData] = useState();

    function handleClick() {
        if (data) {
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            };
            const url = `http://localhost:4001/create-chart/create`
            fetch(url, requestOptions).then(
                (response) => response.json()
            );
            console.log(data);
        }
    }


    return (
        <div className="App" style={{
            minHeight: "300px",
            fontSize: "50px",
            textAlign: "center",
            border: "5px solid black",
            margin: "10% 1% 1% 1%"
        }}
             onDragOver={(e) => {
                 e.preventDefault();
                 console.log("dragging over")
             }
             }
             onDrop={(e) => {
                 e.preventDefault();
                 console.log(e.dataTransfer.files)
                 Array.from(e.dataTransfer.files).map(async file => {
                     let text = await file.text();
                     let result = parse(text, {header: true})
                     console.log(result);
                     setData(result.data);
                 })
             }
             }>
            <p>drop files</p>
            <Button onClick={handleClick}> ok</Button>
        </div>

    );


}