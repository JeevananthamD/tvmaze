import React from 'react'

const Episode = ({seasonNo,episodesData}) => {

    // console.log(episodesData);

    let season_episodes = episodesData.filter(i => i.season==seasonNo);

    console.log(season_episodes);

    return (
        <div>
            
        </div>
    )
}

export default Episode
