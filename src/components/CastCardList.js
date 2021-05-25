import React from 'react'
import CastCard from './CastCard'
import "../styles/Cast.css"

const CastCardList = ({casts}) => {
    return (
        <div className="mt-5 d-flex justify-content-center flex-wrap" id="castCardList">
            {(casts.length)?casts.map((cast,i) => <CastCard data={cast} key={i}/>):<h1>Data not available</h1>}
        </div>
    )
}

export default CastCardList
