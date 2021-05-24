import React from "react";
import ShowCard from "./ShowCard";
import "../styles/ShowCards.css";

const CardList = ({data}) => {
    return(
        <div className="mt-5 d-flex justify-content-center flex-wrap" id="cardList">
            {data.map((show, i) => <ShowCard data={show} key={i}/>)}
        </div>
    );
}

export default CardList;