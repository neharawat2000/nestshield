import React from "react";
import "../../Style/card.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


import { FaCheck } from "react-icons/fa6";
const silverPoints=[
    {
        point:"Heating and Air Conditioning Systems"
    },
    {
        point:"Electrical Systems."
    },
    {
        point:"Plumbing Systems."
    },
    {
        point:"Discounted Home Maintenance Services**"
    },
    {
        point:"Up to $5,000 for Heating and Air Conditioning Systems"
    }
];
const palatinumPoints=[
    {
        point:"Heating and Air Conditioning Systems"
    },
    {
        point:"Electrical Systems."
    },
    {
        point:"Plumbing Systems."
    },
    {
        point:"Discounted Home Maintenance Services**"
    },
    {
        point:"Up to $5,000 for Heating and Air Conditioning Systems"
    },
    {
        point:"Kitchen Appliances"
    },
    {
        point:"Laundry Appliances"
    },
    {
        point:"Roof Leak Repairs (up to $1,000)"
    },
    {
        point:"Up to $4,000 per Appliance for Repair or Replacement"
    },
    {
        point:"Up to $250 in Coverage for Code Violations and Permits"
    },
    {
        point:"FREE HVAC Tune-up"
    },
    {
        point:"Unlimited A/C Refrigerant"
    },
    {
        point:"Coverage for code violations, permits and modifications"
    }
];
const goldPoints=[
    {
        point:"Heating and Air Conditioning Systems"
    },
    {
        point:"Electrical Systems."
    },
    {
        point:"Plumbing Systems."
    },
    {
        point:"Discounted Home Maintenance Services**"
    },
    {
        point:"Up to $5,000 for Heating and Air Conditioning Systems"
    },
    {
        point:"Kitchen Appliances"
    },
    {
        point:"Laundry Appliances"
    },
    {
        point:"Up to $2,000 per Appliance for Repair or Replacement"
    }
];

export function Cards() {
    return(
        <>
            <div className="cardContainer">
                <AnimationOnScroll 
                animatePreScroll={false}
                duration={0.5} 
                initiallyVisible={true}
                animateIn="animate__fadeInUp" className="title">
                    Our Plans
                </AnimationOnScroll>
                <AnimationOnScroll 
                animatePreScroll={false}
                duration={0.6} 
                initiallyVisible={true}
                animateIn="animate__fadeInLeft" className="silver">
                    <div className="about">
                        <h6>NestSilver</h6>
                        <p>
                            At NestShield, we understand the intricate workings that keep your home running smoothly. Our comprehensive coverage extends to vital components.
                        </p>
                    </div>
                    <ul className="points">
                        {
                            silverPoints.map((points, index)=>{
                                return(
                                <li key={index}><FaCheck className="icon"/>{points.point}</li>
                                );
                            })
                        }
                    </ul>
                    <button>Learn More</button>
                </AnimationOnScroll>
                
                <AnimationOnScroll 
                animatePreScroll={false}
                duration={1} 
                initiallyVisible={true}
                animateIn="animate__zoomIn" className="platinum">
                    <div className="about">
                        <h6>NestPlatinum</h6>
                        <p>
                            Discover unparalleled protection with NestPlatinum, our most comprehensive plan offering coverage for parts of 23 critical systems and appliances.
                        </p>
                    </div>
                    <ul className="points">
                        {
                            palatinumPoints.map((points, index)=>{
                                return(
                                <li key={index}><FaCheck className="icon"/>{points.point}</li>
                                );
                            })
                        }
                    </ul>
                    <button>Learn More</button>
                </AnimationOnScroll>

                <AnimationOnScroll 
                animatePreScroll={false}
                duration={0.6} 
                initiallyVisible={true}
                animateIn="animate__fadeInRight" className="gold">
                    <div className="about">
                        <h6>NestGold</h6>
                        <p>
                            NestGold goes beyond ordinary protection, offering a robust shield for parts of 23 major systems and appliances that are the backbone of your home.
                        </p>
                    </div>
                    <ul className="points">
                        {
                            goldPoints.map((points, index)=>{
                                return(
                                <li key={index}><FaCheck className="icon"/>{points.point}</li>
                                );
                            })
                        }
                    </ul>
                    <button>Learn More</button>
                </AnimationOnScroll>
            </div>
        </>
    );
}