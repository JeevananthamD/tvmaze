import React from 'react'
import EpisodeCardList from './EpisodeCardList';

const Episode = ({seasonNo,episodesData}) => {

    // console.log(episodesData);

    let season_episodes = episodesData.filter(i => i.season==seasonNo);

    console.log(season_episodes);

    return (
        <div>
            <EpisodeCardList episodes={season_episodes}/>
        </div>
    )
}

export default Episode
