import React from "react";
import "../../Style/security.css";
import building from "../../resources/building.png"

export function HomeSecurity() {
    return(
        <>
            <div className="securityContainer">
                <div className="first_section">
                    <div className="home_security">
                        Home Security
                    </div>
                    <div className="contentSection">
                        <div className="about">
                            Our home warranties provide coverage for components of as many as 23 systems and appliances. You have the flexibility to tailor your plan by adding extra protection .
                        </div>
                        <button>Talk With an Agent</button>
                    </div>
                </div>
                <div className="second_section">
                    <img src={building} alt="building-image" />
                </div>
            </div>
        </>
    );
}