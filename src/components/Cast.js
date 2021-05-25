import React from 'react'
import CastCardList from './CastCardList'

const Cast = ({data}) => {

    return (
        <div className="cast">
            <CastCardList casts={data}/>
        </div>
    )
}

export default Cast
