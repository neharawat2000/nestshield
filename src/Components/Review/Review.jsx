import React from "react";
import "../../Style/review.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import stars from "../../resources/stars.png";
import google from "../../resources/googleImg.png";
import trustpilot from "../../resources/trustpilot.png";
import bbb from "../../resources/bbb.png";

export default function Review(){

    const reviewData=[
        {
            name:"Refugio K",
            date: "Mar 21, 2024",
            review:"Awesome experience with Jake, he was very clear and patient and answered all my questions.",
            postedBy: google,
            ratings: stars
        },
        {
            name:"Davelon Coleman",
            date: "Mar 21, 2024",
            review:"Looking forward to serving customers in the HVAC field. Response to becoming a vendor was fast and…",
            postedBy: trustpilot,
            ratings: stars
        },
        {
            name:"Jackson K",
            date: "Mar 21, 2024",
            review:"So at first i had so much questions weather i should or shouldn't and finally I took my policy out Best…",
            postedBy: google,
            ratings: stars
        },
        {
            name:"Benjamin M",
            date: "Mar 21, 2024",
            review:"I love Fist Premier Home Warranty and also this great companion platform. Just keep up the good",
            postedBy: google,
            ratings: stars
        }
    ];
    return(
        <>
            <AnimationOnScroll 
            animatePreScroll={false}
            duration={0.5} 
            initiallyVisible={false}    
            animateIn="animate__fadeInUp">
                <div className="reviewContainer">
                    <h4 className="title_section">
                        Why Customers <span>Trust</span> First Premier Home Warranty
                    </h4>
                    <div className="reviewCount">
                        <p>459+ Reviews on</p>
                        <img src={google} alt="google-logo" />
                        <img src={trustpilot} alt="trustpilot-logo" />
                        <img src={bbb} alt="bbb-logo" />
                    </div>
                    <div className="reviewbyUser">
                        <div className="user">
                            {
                                reviewData.map((data, index)=>{
                                    return(
                                        <AnimationOnScroll 
                                        duration={4}
                                        animateIn='animate__flipInY'
                                        initiallyVisible={false}
                                        key={index} className="box">
                                            <div className="name_section">
                                                <div className="name">{data.name}</div>
                                                <div className="date">{data.date}</div>
                                            </div>
                                            <p className="review">
                                            {data.review}
                                            </p>
                                            <div className="rating">
                                                <div className="posted">
                                                    <span>posted by</span>
                                                    <img src={data.postedBy} alt="posted by google" />
                                                </div>
                                                <img src={data.ratings} alt="ratings" />
                                            </div>
                                        </AnimationOnScroll>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </>
    );
}