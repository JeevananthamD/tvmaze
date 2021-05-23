import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Card = ({data}) => {

    let img_src = undefined;
    let summary = "";
    let rating = data.rating.average;

    try {
        summary = data.summary
        summary = summary.replace(/(<p>|<\/p>|<b>|<\/b>|<i>|<\/i>|<br \/>)/g,"").substr(0,70) + ".....";
    } catch (error) {
        summary = "";
    }
    
    try {
        img_src = data.image.medium;
    } catch (error) {
        img_src = "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
    }
    
    return(
        <Link to={`/show/${data.id}`}>
            <button style={{padding: "0", borderRadius: "10px"}}>
                <div className="card cardContainer" style={{backgroundImage: `url(${img_src})`}}>
                    <div className="card-body cardBody">
                        <h5 className="card-title" style={{color: "var(--success)"}}>{data.name}</h5>
                        <p className="card-text" style={{color: "white"}}><AiFillStar size="1.2em" color="yellow" style={{position: "relative", top: "-3px"}}/> <span style={{color: "var(--success)"}}>{rating}</span> {summary}</p>
                    </div>
                </div>
            </button>
        </Link>
    );
    
}

export default Card;