import React from 'react'
import SeasonCard from './SeasonCard'
import '../styles/SeasonCard.css'

const SeasonCardList = ({seasonData}) => {
    return (
        <div className="mt-5 d-flex justify-content-center flex-wrap" id="seasoncardlist">
            {seasonData.map((season, i) => <SeasonCard data={season} key={i}/>)}
        </div>
    )
}

export default SeasonCardList
{}