import logo from './logo.svg';
import './App.css';
import './components/Charts.js';
import {Charts} from "./components/Charts";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Charts />} />
                  <Route path="/home" element={<Charts />} />
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
