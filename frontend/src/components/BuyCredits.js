import {useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./style/Charts.css";
import logo from "../logo.svg";
import {ButtonGroup, ButtonToolbar} from "react-bootstrap";
import "./style/Account.css";
import "./GoogleLoginButton.js"
import { ToastContainer, toast } from 'react-toastify';


// url here needs accountID email
export default function BuyCredits() {
    const navigate = useNavigate();
    const {credentials} = useParams();
    const {state} = useLocation();
    async function postCredits(credits){
        if (credits !== 0) {
            const requestOptions = {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${state.accessToken}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                // body: JSON.stringify(credits),
            };
            const url = `http://localhost:4500/credits/purchaseCredits/${credits}`
            await fetch(url, requestOptions)
                .then((res) => {console.log(res)})
                .catch(err => console.log(err));
            console.log(credits);
            //inform the user of the purchase
            toast.info('You bought ' + credits + ' credits!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    function handleClick() {
        //navigate to previous page
        navigate(`/account/${credentials}`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken
            },
        });
    }


    return (
        <div>
            <img src={logo} className="template-logo" alt="logo"/>
            <div className="justify-content-start">
                <h3 className='mt-5'> you're logged in as </h3>
                <div className='mt-5'>
                    <ButtonToolbar>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={() => postCredits(5)}>
                                5 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={() => postCredits(10)}>
                                10 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={() => postCredits(15)}>
                                15 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={() => postCredits(20)}>
                                20 credits
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <Button className="mt-5" variant="outline-dark" onClick={handleClick}>
                        cancel purchase
                    </Button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}
