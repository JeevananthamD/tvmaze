import React from "react";
import Card from "./Card";
import "../styles/Cards.css";

const CardList = ({data}) => {
    return(
        <div className="mt-5 d-flex justify-content-center flex-wrap" id="cardList">
            {data.map((show, i) => <Card data={show} key={i}/>)}
        </div>
    );
}

export default CardList;