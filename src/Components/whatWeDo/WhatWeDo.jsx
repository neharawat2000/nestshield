import React from "react";
import "../../Style/whatWedo.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import charger from "../../resources/charger.png";
import pros from "../../resources/pros.png";
import roof from "../../resources/roof.png";
import home from "../../resources/modernhome.png";

export default function WhatWeDo() {

    const services=[
        {
            title:"Upto 23 Home Items Coverage",
            parah:"Including parts of the systems and appliances you rely on every day",
            img:charger
        },
        {
            title:"Member Perks",
            parah:" Discounts on home services and seasonal maintenance",
            img:roof
        },
        {
            title:"Nationwide Network of Pros",
            parah:"Trustworthy and there when you need them the most",
            img:pros
        },
    ];

    return(
        <>  
            <AnimationOnScroll 
            animatePreScroll={false}
            duration={0.5} 
            initiallyVisible={false}    
            animateIn="animate__fadeInUp">
                <div className="whatweDoContainer">
                    <AnimationOnScroll 
                    animatePreScroll={false}
                    duration={0.5} 
                    initiallyVisible={false}    
                    animateIn="animate__fadeInLeft"
                    className="titleSection">
                        <div className="first">
                            <img src={home} alt="" />
                            <div className="content">
                                <h1>What <span>We Do</span></h1>
                                <p>We provide holistic home security services to make sure you don’t have to worry about any of it at all.</p>
                            </div>
                        </div>
                        <div className="second">
                            <div></div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll 
                    animatePreScroll={false}
                    duration={0.6} 
                    initiallyVisible={false}    
                    animateIn="animate__fadeInRight" className="boxSection">
                        {
                            services.map((service, index)=>{
                                return(
                                    <div className="box">
                                        <img src={service.img} alt="" />
                                        <div className="content">
                                            <div className="content_title">
                                                {service.title}
                                            </div>
                                            <p>
                                                {service.parah}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </AnimationOnScroll>
                    <AnimationOnScroll 
                    animatePreScroll={false}
                    duration={0.7} 
                    initiallyVisible={false}    
                    animateIn="animate__fadeInLeft" className="last">
                        Be confident and in control with <span>NestShield.</span>
                    </AnimationOnScroll>
                </div>
            </AnimationOnScroll>
        </>
    );
}