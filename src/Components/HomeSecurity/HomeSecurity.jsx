import React from "react";
import "../../Style/security.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import building from "../../resources/building.png"

export function HomeSecurity() {
    return(
        <>
            <AnimationOnScroll 
            animatePreScroll={false}
            duration={0.5} 
            initiallyVisible={false}    
            animateIn="animate__fadeInUp">
                <div className="securityContainer">
                    <AnimationOnScroll 
                    animatePreScroll={false}
                    duration={0.6} 
                    initiallyVisible={false}    
                    animateIn="animate__fadeInLeft" 
                    className="first_section">
                        <div className="home_security">
                            Home Security
                        </div>
                        <div className="contentSection">
                            <div className="about">
                                Our home warranties provide coverage for components of as many as 23 systems and appliances. You have the flexibility to tailor your plan by adding extra protection .
                            </div>
                            <button>Talk With an Agent</button>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll 
                    animatePreScroll={false}
                    duration={0.5} 
                    initiallyVisible={false}    
                    animateIn="animate__fadeInRight" 
                    className="second_section">
                        <img src={building} alt="building-image" />
                    </AnimationOnScroll>
                </div>
            </AnimationOnScroll>
        </>
    );
}