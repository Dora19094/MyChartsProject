import './App.css';
import './components/Charts.js';
import {Charts} from "./components/Charts";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NewChart from "./components/NewChart";
import Account from "./components/Account";
import BuyCredits from "./components/BuyCredits";
import About from "./components/About";
import {GoogleOAuthProvider} from '@react-oauth/google';
import ErrorChart from "./components/ErrorChart";
import {MyCharts} from "./components/MyCharts";
import Parse from "./components/csvtojson";
import {ErrorMessage} from "./components/ErrorMessage";

function App() {
    return (
        <GoogleOAuthProvider clientId='1068088482416-5ta3i9a1s4ki9d1fiilvdv8uiu16pot1.apps.googleusercontent.com'>
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Charts/>}/>
                            <Route path="/home" element={<Charts/>}/>
                            <Route path="/account/:credentials/newchart" element={<NewChart/>}/>
                            <Route path="/account/:credentials" element={<Account/>}/>
                            <Route path="/account/:credentials/buy" element={<BuyCredits/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/account/:credentials/error" element={<ErrorChart/>}/>
                            <Route path="/account/:credentials/mycharts" element={<MyCharts/>}/>
                            <Route path="/account/:credentials/errormessage" element={<ErrorMessage/>}/>
                            <Route path="/parse" element={<Parse/>}/>
                        </Routes>
                    </BrowserRouter>
                </header>
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
