import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { IoMdSearch } from "react-icons/io";
import OurMembers from "../../Components/Our_Members/OurMembers";
import WhatWeDo from "../../Components/whatWeDo/WhatWeDo";
import { HomeSecurity } from "../../Components/HomeSecurity/HomeSecurity";
import Expenses from "../../Components/expenses/Expenses";
import Rated from "../../Components/Rated/Rated";
import { Cards } from "../../Components/Card/Cards";
import Review from "../../Components/Review/Review";
import Footer from "../../Components/Footer/Footer";

import hero2 from "../../resources/hero2.png";

import pointOne from "../../resources/pointOne.png";
import pointTwo from "../../resources/pointTwo.png";
import pointThree from "../../resources/pointThree.png";

export default function Home() {
    return(
        <>
            <Navbar/>
                <div className="hero-section">
                    <div className="productPoints">
                        <img src={pointOne} alt="points" className="one" />
                        <img src={pointTwo} alt="points" className="two" />
                        <img src={pointThree} alt="points" className="three" />
                    </div>
                    <div className="box">
                        <div className="about">
                            <h1 className="title">Guardians of Your Home</h1>
                            <h6 className="sub-heading">
                            A Decade Strong in Shielding Dreams
                            </h6>
                            <p>
                                Break free from the worry of unexpected breakdowns. With American Home Shield, take charge of your home, confident in the knowledge that we’ve got you covered. Your home, your rules.
                            </p>
                        </div>
                        <div className="homeBtn">
                            <button>
                                Enter your Zip Code
                                <button className="plan">
                                    <IoMdSearch  className="searchIcon"/>
                                    Find Plans</button>
                            </button>
                        </div>
                        
                    </div>
                </div> 
                <WhatWeDo/>   
                <HomeSecurity/>   
                <Expenses/>
                <div className="image">
                    <img src={hero2} alt="image" />
                </div>
                <OurMembers/>
                <div className="showReview">
                    <div className="title">
                        Our Customers Love Services that You Will Too!
                    </div>
                    <div className="parah">
                        <p className="quotation">“</p>
                        <p>
                            "We have had nothing but great experiences with all of the service providers and with
                            NestShield. They truly exceed our expectations every time." - Korena
                        </p>
                    </div>
                </div>
                <Rated/>
                <Cards/>
                <Review/>
                <Footer/>
        </>
    );
}