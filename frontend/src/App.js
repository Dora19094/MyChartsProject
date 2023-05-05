import logo from './logo.svg';
import './App.css';
import './components/Charts.js';
import {Charts} from "./components/Charts";
import CreateDiagram from "./components/NewChart";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NewChart from "./components/NewChart";
import Account from "./components/Account";
import BuyCredits from "./components/BuyCredits";
import About from "./components/About";
import { GoogleOAuthProvider } from '@react-oauth/google';


// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <BrowserRouter>
//                     <Routes>
//                         <Route path="/" element={<Charts/>}/>
//                         <Route path="/home" element={<Charts/>}/>
//                         <Route path="/newchart" element={<NewChart/>}/>
//                         <Route path="/account" element={<Account/>}/>
//                         <Route path="/buy" element={<BuyCredits/>}/>
//                         <Route path="/about" element={<About/>}/>
//                     </Routes>
//                 </BrowserRouter>
//             </header>
//         </div>
//     );
// }

function App() {
    return (
        <GoogleOAuthProvider clientId='1068088482416-5ta3i9a1s4ki9d1fiilvdv8uiu16pot1.apps.googleusercontent.com'>
            <div className="App">
                <header className="App-header">
                <BrowserRouter>
                     <Routes>
                         <Route path="/" element={<Charts/>}/>
                         <Route path="/home" element={<Charts/>}/>
                         <Route path="/newchart" element={<NewChart/>}/>
                         <Route path="/account" element={<Account/>}/>
                         <Route path="/buy" element={<BuyCredits/>}/>
                         <Route path="/about" element={<About/>}/>
                     </Routes>
                 </BrowserRouter>
                </header>
            </div>
        </GoogleOAuthProvider>
    );
}
export default App;
