import React, { useState, useEffect } from 'react';
import Cast from './Cast';
import Episodes from './Episodes';
import Overview from './Overview';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import "../styles/Show.css";

const Show = (props) => {

    let id = props.match.params.id;
    
    const [data, setData] = useState(() => undefined);

    async function fetchData() {
        let response = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`);
        let jsonData = await response.json();
        setData(jsonData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {console.log(data)}
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#Overview" data-bs-toggle="tab">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Episodes" data-bs-toggle="tab">Episodes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Cast" data-bs-toggle="tab">Cast</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="Overview">
                    <Overview data={data}/>
                </div>
                <div className="tab-pane" id="Episodes">
                    <Episodes/>
                </div>
                <div className="tab-pane" id="Cast">
                    <Cast/>
                </div>                
            </div>
        </div>
    )
}

export default Show;
