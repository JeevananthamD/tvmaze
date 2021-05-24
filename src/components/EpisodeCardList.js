import React from 'react'
import EpisodeCard from './EpisodeCard'
import  '../styles/EpisodeCard.css'

const EpisodeCardList = ({episodes}) => {
    return (
        <div className="container">
            {episodes.map((episode,i) => <EpisodeCard data={episode} key={i}/>)}
        </div>
    )
}

export default EpisodeCardList
