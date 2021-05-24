import React from 'react'

const EpisodeCard = ({data}) => {

    let summary = undefined;
    let img_src = undefined;

    try {
        img_src = data.image.medium;
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
        <div className="episode mt-3 col">
            <div className="episodeImg-box"><img className="episodeImg mb-2" src={img_src}/></div>
            <h4 className="fw-bold">{data.name}</h4>
            <div><span className="me-2">Air date:</span>{data.airdate}</div>
            <div><span className="me-1">Episode: </span>{data.number}</div>
            <div><span className="me-1">Runtime:</span>{data.runtime}</div>
            <div>{summary}</div>
        </div>
    )
}

export default EpisodeCard
