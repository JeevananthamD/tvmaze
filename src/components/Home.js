import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import "../styles/Home.css";


const Home = (props) => {

    const [data , setData] = useState(undefined);
    const {searchInput} = props;

    const fetchData = () => {
        fetch(`http://api.tvmaze.com/search/shows?q=${searchInput}`)
        .then(response => response.json())
        .then(data => {  console.log(data); return setData(data);})
        .catch(e => alert(e));
    }
    
    useEffect(() => {
        if(searchInput) {
            fetchData();
        }
        else {
            setData(undefined);
        }
    },[searchInput]);

    useEffect(() => {
        let interval = undefined;
        if(!data) {
            const q = document.getElementById("q");
            const s = window.screen;
            const w = (q.width = s.width);
            const h = (q.height = s.height);
            const ctx = q.getContext("2d");

            const p = Array(Math.floor(w / 10) + 1).fill(0);

            const random = (items) => items[Math.floor(Math.random() * items.length)];

            const hex = "0123456789ABCDEF".split("");

            setInterval(() => {
            ctx.fillStyle = "rgba(0,0,0,.05)";
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = "#0f0";
            p.map((v, i) => {
                ctx.fillText(random(hex), i * 10, v);
                p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
            });
            }, 1000 / 30);
        }
        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        <>
            <div id="bgAnimationContainer">
                <canvas id="q"></canvas>
            </div>
            {(data)?
            <div className="container" id="cardContainer">
                <CardList data={data}/>
            </div> :
            ""}
        </>
    );
}

export default Home;