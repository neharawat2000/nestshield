import React from "react";
import "../../Style/member.css"

import member from "../../resources/member.png"
import bag_icon from "../../resources/bag.png"
import warranty from "../../resources/warranty.png"

export default function OurMembers(params) {
    return(
        <>
            <div className="memberContainer">
                <div className="firstContainer container">
                    <img src={member} alt="image" />
                    <div className="section">
                        <div className="title_section">
                            <h1>Our members <span>get even more</span> </h1>
                            <div className="prah">
                                <p>All home warranties are not created equal. Our Shield Assurances are always included, even in our base plans.</p>
                                <strong>That means you get coverage for:</strong>
                            </div>
                        </div>
                        <ul className="points">
                            <li><span>1</span>Normal wear and tear</li>
                            <li><span>2</span>Improper installation or repair</li>
                            <li><span>3</span>Insufficient maintenance</li>
                            <li><span>4</span>Rust, corrosion, or sediment</li>
                            <li><span>5</span>Mismatched HVAC system</li>
                            <li><span>6</span>Older items, no matter their age</li>
                            <li><span>7</span>Unknown pre-existing breakdowns</li>
                            <li><span>8</span>Items without maintenance records</li>
                            <li><span>9</span>Duplicates of the same item, like that extra A/C unit</li>
                        </ul>
                        <div className="guarantee-sec">
                            <img src={bag_icon} alt="icon" />
                            <div className="guarantee">
                                <h3>30-Day Workmanship Guarantee</h3>
                                <p>
                                    If you have an issue with your completed repair within 30 days of service, we’ll
                                    send a Pro back out for free.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middleContainer">
                    Repair/replacement costs are the eightieth percentile of U.S. costs according to a nationwide survey of homeowners conducted in 2019 by ClearVantage for NestShield.
                </div>
                <div className="secondContainer container">
                    <div className="section">
                        <div className="title_section">
                            <div className="heading">
                                 <h1>What is a <span>home warranty?</span> </h1>
                            </div>
                            <div className="prah">
                                <p>
                                    A home warranty covers (or helps pay) the costs for repairing or replacing systems and appliances when they stop working. The service contract for a home warranty is one year. Home warranties are meant to complement your homeowner’s insurance to cover things that insurance doesn’t, such as improper maintenance and normal wear- and-tear.
                                </p>
                                <button className="readMore">
                                    READ MORE
                                </button>
                                <p>
                                    <strong>
                                    A home warranty from NestShield offers even more
                                    benefits than a typical home warranty. Members enjoy
                                    perks such as discounts on new appliances and services
                                    like pre-season HVAC maintenance, tech set-up and
                                    installation, and more.
                                </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={warranty} alt="image" />
                </div>  

            </div>
        </>
    );
}