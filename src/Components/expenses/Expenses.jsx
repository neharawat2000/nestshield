import React from "react";
import "../../Style/expenses.css"
import information from "../../resources/information.png";
import charger from "../../resources/charger.png";
import cooling from "../../resources/cooling.png";
import plumbing from "../../resources/plumbing.png";
import appliances from "../../resources/appliances.png";

import laundry from "../../resources/laundry.png";
import electronic from "../../resources/electronic.png";
import roof from "../../resources/roof.png";
import coverage from "../../resources/coverage.png";
import maintenance from "../../resources/maintenance.png";

export default function Expenses(){
    const expenses= [
        {
            img:cooling,
            title:"Cooling",
            costDetail:"can cost for you",
            cost:"up to $3,800"
        },
        {
            img:charger,
            title:"Heating",
            costDetail:"can cost for you",
            cost:"up to $3,625"
        },
        {
            img:plumbing,
            title:"Plumbing",
            costDetail:"can cost for you",
            cost:"up to $1,200"
        },
        {
            img:appliances,
            title:"Appliances",
            costDetail:"can cost for you",
            cost:"up to $1,500"
        }
    ];
    const expectation= [
        {
            img:cooling,
            title:"Heating & Air Conditioning"
        },
        {
            img: electronic,
            title:"Electrical Systems & Accessories"
        },
        {
            img:plumbing,
            title:"Plumbing Systems & Accessories"
        },
        {
            img:appliances,
            title:"Kitchen Appliances"
        },
        {
            img:laundry,
            title:"Laundry Appliances"
        },
        {
            img: roof,
            title:"Roof Leak Repair"
        },
        {
            img: maintenance,
            title:"Maintenance Services"
        },
        {
            img: coverage,
            title:"Additional Coverage"
        }
    ];

    return(
        <>
            <div className="expenseContainer">
                <div className="title_section">
                    <h2>Help control out-of-pocket expenses.</h2>
                    <p>
                        <span>Without a home warranty,</span>
                        it can cost a lot to repair or replace the systems you rely on.
                    </p>
                </div>
                <div className="second">
                    <div className="boxes">
                        {
                            expenses.map((box, index)=>{
                                return(
                                    <div key={index} className="box">
                                        <img src={box.img} alt="" />
                                        <p>{box.title}</p>
                                        <div className="cost">
                                            <p>{box.costDetail}</p>
                                            <span>{box.cost}</span>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="last">
                    <img src={information} alt="icon" />
                    Repair/replacement costs are the eightieth percentile of U.S. costs according to a nationwide survey of homeowners conducted in 2019 by ClearVantage for NestShield.
                </div>
            </div>
            <div className="expectationContainer">
                <div className="title_section">
                    <div className="title">
                        What’s included? 
                        <span>Beyond Expectations.</span>
                    </div>
                    <p>
                    Our home warranties provide coverage for components of <span>as many as 23 systems and appliances.</span>  You have the flexibility to <span>tailor your plan</span> by adding extra protection for items such as swimming pools, electronics, and more.
                    </p>
                </div>
                <div className="boxes">
                    {
                        expectation.map((box, index)=>{
                            return(
                                <div key={index} className="box">
                                    <img src={box.img} alt="img" />
                                    <p>{box.title}</p>
                                </div>
                            );
                        })
                    }
                </div>
                    
            </div>
        </>
    );
}