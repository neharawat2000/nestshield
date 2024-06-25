import React from "react";
import "../../Style/footer.css";
import logo from "../../resources/logo.png";
import rectangle from "../../resources/rectangle.png";

export default function Footer() {
    return(
        <>
            <footer>
                <img src={rectangle} alt="" className="firstContainer"/>
                <div className="container">
                    <div className="first">
                        <div className="company">
                            <img src={logo} alt="logo" />
                            <div className="name">
                                NestShield <span>INSURANCE</span>
                            </div>
                        </div>
                        <ul className="links">
                            <li>Home Warranty</li>
                            <li>Support</li>
                            <li>Blog</li>
                            <li>Complaint</li>
                            <li>Solutions</li>
                            <li>Connect</li>
                        </ul>
                    </div>
                    <div className="second">
                        <div className="policy">
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Nestshield 2023 © | All Rights Reserved</p>
                        </div>
                        <div className="address">
                            <span>USA</span>
                            <p>Suite # 1105, 38 Dan Leckie Way Toronto M5V 2V6, Canada</p>
                        </div>
                    </div>
                </div>
                <div className="secondContainer">
                    <div className="first">
                        <div className="company">
                            <img src={logo} alt="logo" />
                            <div className="name">
                                NestShield <span>INSURANCE</span>
                            </div>
                        </div>
                        <div className="connect">
                            <div className="address">
                                <span>USA</span>
                                <p>Suite # 1105, 38 Dan Leckie Way Toronto M5V 2V6, Canada</p>
                            </div>
                            <button className="connectBtn">
                                CONNECT WITH US
                            </button>
                        </div>
                    </div>
                    <div className="middle">
                        <h6>Useful Links</h6>
                        <ul className="links">
                            <li>Home Warranty</li>
                            <li>Support</li>
                            <li>Blog</li>
                            <li>Complaint</li>
                            <li>Solutions</li>
                            <li>Connect</li>
                        </ul>
                    </div>
                    <div className="second">
                        <div className="policy">
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Nestshield 2023 © | All Rights Reserved</p>
                        </div>                       
                    </div>
                </div>
                <div className="last">
                    Nestshield 2023 © | By 
                    <span>Ceté</span>
                </div>
            </footer>
        </>
    );
}