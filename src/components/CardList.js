import React from "react";
import Card from "./Card";
import "../styles/Cards.css";

const CardList = ({data}) => {
    return(
        <div className="mt-5 d-flex justify-content-center flex-wrap" id="cardList">
            {data.map((single_data, i) => <Card rawdata={single_data} id={i} key={i}/>)}
        </div>
    );
}

export default CardList;