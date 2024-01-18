import React from "react";
import './Footer.css';

const Footer = () =>{
    return(
        <>
            <div className="container-here" id="contact">
                <h1 className="title-this">CONTACT ME</h1>
                <div className="container-inside">

                    <label for="name">Your Name:</label>
                    <input type="text" className="fname" name="name"/>
                    <label for="email">Your Email:</label>
                    <input type="email" className="fmail" name="email"/>
                    <label for="num">Your Number:</label>
                    <input type="text" className="fnum" name="num"/>
                    <label for="cont">Your Message:</label>
                    <input type="text" className="fmess" name="cont"/>
                    <div className="btnsec">
                        <button>SUBMIT</button>
                    </div>
                    
                </div>
            </div>
            <div className="copyright">
                <div className="btnsec">
                    <h2>Contact me Through:</h2>
                    <button>FACEBOOK</button>
                    <button>GITHUB</button>
                    <button>LINKEDIN</button>
                </div>
            </div>
        </>
    );
}

export default Footer;