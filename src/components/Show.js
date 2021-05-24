import React, { useState, useEffect } from 'react';
import Cast from './Cast';
import Seasons from './Seasons';
import Overview from './Overview';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import "../styles/Show.css";

const Show = ({id,getEpisodes}) => {
   
    const [data, setData] = useState(() => {
        return {show: undefined, seasons: undefined}
    });

    async function fetchData() {
        let response1 = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`);
        let showData = await response1.json();
        let response2 = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`);
        let seasonData = await response2.json();
        setData({show: showData, seasons: seasonData});
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if(data.show) {
            getEpisodes(data.show._embedded.episodes);
        }
    },[data]);

    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#Overview" data-bs-toggle="tab">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Seasons" data-bs-toggle="tab">Seasons</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Cast" data-bs-toggle="tab">Cast</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="Overview">
                    {(data.show)?<Overview data={data.show} key={id}/>:""}
                </div>
                <div className="tab-pane" id="Seasons">
                    {(data.show && data.seasons)?<Seasons seasonData={data.seasons} id={id}/>:""}
                </div>
                <div className="tab-pane" id="Cast">
                    <Cast/>
                </div>                
            </div>
        </div>
    )
}

export default Show;
