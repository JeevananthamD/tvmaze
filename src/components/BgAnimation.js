import React, { useEffect, useRef } from 'react'

let interval = undefined;

const BgAnimation = () => {

    const q = useRef(null);

    useEffect(() => {
        const s = window.screen;
        const w = (q.current.width = s.width);
        const h = (q.current.height = s.height);
        const ctx = q.current.getContext("2d");

        const p = Array(Math.floor(w / 10) + 1).fill(0);

        const random = (items) => items[Math.floor(Math.random() * items.length)];

        const hex = "0123456789ABCDEF".split("");

        interval = setInterval(() => {
        ctx.fillStyle = "rgba(0,0,0,.05)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#0f0";
        p.map((v, i) => {
            ctx.fillText(random(hex), i * 10, v);
            p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
        });
        }, 1000 / 30);
        return() => {
            clearInterval(interval);
        }
    },[]);

    return (
        <div id="bgAnimationContainer">
          <canvas ref={q}></canvas>
        </div>
    )

}

export default BgAnimation;
