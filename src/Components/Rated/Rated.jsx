import React from "react";
import "../../Style/rated.css"

import besthome from "../../resources/bestHome.png";
import consumerAffairs from "../../resources/consumerAffairs.png";
import google from "../../resources/google.png";
import homeAdvisor from "../../resources/homeAdvisor.png";
import investopedia from "../../resources/investopedia.png";
import forbes from "../../resources/forbes.png";
import reviewHome from "../../resources/reviewHome.png";
import thetop10 from "../../resources/thetop10.png";
import top10 from "../../resources/top10.png";
import topRank from "../../resources/topRank.png";
import usnews from "../../resources/usnews.png";
import usToday from "../../resources/usToday.png";

export default function Rated() {

    const affiliations=[
        {
            about: "Rated a Best Home Warranty Company for 2024 and Best for Customer Satisfaction",
            logo:investopedia
        },
        {
            about: "#1 Rated by",
            logo:forbes
        },
        {
            about: "Rated Best Reviews by",
            logo:consumerAffairs
        },
        {
            about: "Most Trustworthy Rated by",
            logo:top10
        },
        {
            about: "Most Trustworthy Rated by",
            logo:besthome
        },
        {
            about: "Top Ranked Home Warranty Company",
            logo:usnews
        },
        {
            about: "Rated Best in Service by",
            logo:homeAdvisor
        },
        {
            about: "#1 Rated by",
            logo:usToday
        },
        {
            about: "Awarded in",
            logo:thetop10
        },
        {
            about: "Most Trustworthy Rated by",
            logo:reviewHome
        },
        {
            about: "Top searched in",
            logo:google
        },
        {
            about: "Top Ranked Home Warranty in 2024",
            logo:topRank
        }
    ];

    return(
        <>
            <div className="ratedContainer">
                <div className="ratedSection">
                    <h5>
                        The <span>#1 Highest Rated</span> Home Warranty In America!
                    </h5>
                    <p>
                        See Our Affiliations Below
                    </p>
                </div>
                <div className="affiliations">
                    {
                        affiliations.map((affiliation,index)=>{
                            return(
                                <div className="box">
                                    <div className="about">
                                        {affiliation.about}
                                    </div>
                                    <div className="logo">
                                        <img src={affiliation.logo} alt="logo" />
                                    </div>
                                </div>
                            );
                        })
                    }
                    
                </div>
            </div>
        </>
    );
}