import React from 'react'
import "../styles/Overview.css"
import { AiFillStar } from "react-icons/ai";
import Genres from "./Genres"
import LodingAnimation from './LodingAnimation';


const Overview = ({data}) => {

    let img_src = "";
    let summary = "";
    let genres = data.genres;

    try {
        img_src = data.image.original;
    } catch (error) {
        img_src = "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
    }

    try {
        summary = data.summary
        summary = summary.replace(/(<p>|<\/p>|<b>|<\/b>|<i>|<\/i>|<br \/>)/g,"");
    } catch (error) {
        summary = "";
    }

    return (
        <div className="container" id="overview">
            <div className="ov-wrap row">
                <div className="ov-imageContainer align-self-start col-md-6 col-lg-4">
                    <img src={img_src} className="ov-image"/>
                </div>
                <div className="ov-textarea col" id="ov-textarea">
                    <div className="d-flex align-self-center" style={{position: "absolute", right: "10px"}}><AiFillStar size="1.8rem" color="yellow"/> <span className="ps-2 fs-5">{data.rating.average}</span></div>
                    <div className="fw-bold fs-3 mb-2">{data.name}</div>
                    <div className="d-flex d-{inline-block}">{genres.map((i,j) => <Genres i={i} key={j}/>)}</div>
                    <p>{summary}</p>
                    <div className="d-flex row m-0"><p className="col-6 p-0">Language</p> <p className="col-6 p-0">{(data.language)?data.language:"NA"}</p></div>
                    <div className="d-flex row m-0"><p className="col-6 p-0">Premiered</p> <p className="col-6 p-0">{(data.premiered)?data.premiered:"NA"}</p></div>
                    <div className="d-flex row m-0"><p className="col-6 p-0">Status</p> <p className="col-6 p-0">{(data.status)?data.status:"NA"}</p></div>
                    <div className="d-flex row m-0"><p className="col-6 p-0">Official Site</p> {(data.officialSite)?<a href={`${data.officialSite}`} target="_blank" className="col-6 p-0 link">Link</a>:"NA"}</div>
                </div>
            </div>
        </div>
    )

}

export default Overview
