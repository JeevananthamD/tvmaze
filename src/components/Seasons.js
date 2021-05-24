import {React , createContext} from 'react'
import SeasonCardList from './SeasonCardList'

export const showId = createContext();

const Seasons = ({seasonData, id}) => {

    return (
        <div id="seasons">
            <showId.Provider value={id}>
                <SeasonCardList seasonData={seasonData}/>
            </showId.Provider>
        </div>
    )
}

export default Seasons
