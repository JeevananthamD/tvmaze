import { React, useContext } from 'react'
import { Link } from 'react-router-dom';
import { showId } from "./Seasons";

const SeasonCard = ({data}) => {

    const id = useContext(showId);
    let img_src = undefined;

    try {
        img_src = data.image.original;
    } catch (error) {
        img_src = "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
    }

    return (
        <Link to={`/show/season/${data.number}`}>
            <div className="seasonCard">
                <img src={img_src} className="seasonImg"/>
                <p className="seasonNo">S{data.number}</p>
            </div>
        </Link>
    )
    
}

export default SeasonCard
