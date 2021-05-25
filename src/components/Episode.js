import React from 'react'
import EpisodeCardList from './EpisodeCardList';

const Episode = ({seasonNo,episodesData}) => {

    let season_episodes = episodesData.filter(i => i.season==seasonNo);

    return (
        <div>
            <EpisodeCardList episodes={season_episodes}/>
        </div>
    )
}

export default Episode
