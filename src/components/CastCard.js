import React from 'react'

const CastCard = ({data}) => {

    let img_src = undefined;

    try {
        img_src = data.person.image.medium;
    } catch (error) {
        img_src = "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

    }

    return (
        <div className="card castcard" style={{width: "18rem"}}>
            <img src={img_src} className="card-img-top" style={{width: "284px",height: "402px"}}/>
            <div className="card-body">
                <p className="card-text text-dark"><span className="fs-3 me-1 font-bold">{data.person.name}</span> as <span className="ms-1 font-bold">{data.character.name}</span></p>
            </div>
        </div>
    )
}

export default CastCard
