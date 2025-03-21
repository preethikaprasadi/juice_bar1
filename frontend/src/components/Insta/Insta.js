import React from "react";
import './Insta.css';
import { FaInstagram } from "react-icons/fa";
import I1 from "../../assets/I1.png";
import I2 from "../../assets/I2.png";
import I3 from "../../assets/I3.png";
import I4 from "../../assets/I4.png";
import I5 from "../../assets/I5.png";
import I6 from "../../assets/I6.png";

const Insta = () => {
    return(
        <div className="header">
            <h1>Sip, Snap & Share</h1>
            <p>Join our juice-loving community on Instagram!</p>
            <p>Tag @JuiceBliss in your posts and get featured.</p>
            <div className="logo">
                <img src={FaInstagram} alt="icon"></img>
                <div className="button1">
                    <button>Follow Us on Instagram</button>
                </div>
            </div>
            <div className="Image-raw">
                <img src={I1} alt="I1"></img>
                <img src={I2} alt="I2"></img>
                <img src={I3} alt="I3"></img>
                <img src={I4} alt="I4"></img>
                <img src={I5} alt="I5"></img>
                <img src={I6} alt="I6"></img>
            </div>
        </div>
    );
};

export default Insta;