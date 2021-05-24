import React, { useState, useEffect } from 'react';
import ShowCardList from './ShowCardList';


const Home = (props) => {

    const [data , setData] = useState(undefined);
    const {searchInput, searchBy} = props;

    const fetchData = async () => {
        try{
            let data = [];
            let response = await fetch(`https://api.tvmaze.com/search/${searchBy}?q=${searchInput}`);
            let jsonData = await response.json();
            if(searchBy==="shows") {
                data = jsonData.map(i => i.show);
            }
            else {
                let personId = jsonData.map(i => i.person.id);
                await Promise.all(personId.map(id => {
                    return fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`)
                    .then(response =>  response.json())
                    .then(person_jsonData => person_jsonData.filter(i => i))
                    .then(shows => {
                        shows.forEach(i => {
                            data.push(i._embedded.show);
                        });
                    })
                }))
            }
            const uniqueId = new Set();
            data.forEach(i => uniqueId.add(i.id));
            let uniqueIdArray = [...uniqueId];
            let uniqueData = uniqueIdArray.map(i => data.find(j => i === j.id));
            setData(uniqueData);
        }
        catch(e) {
            alert(e);
            window.location.reload();
        }
    }
    
    useEffect(() => {
        if(searchInput) {
            fetchData();
        }
        else {
            setData(undefined);
        }
    },[searchInput, searchBy]);

    return (
        <div className="container" id="cardContainer">
            {/* {console.log(data)} */}
            {(data)?<ShowCardList data={data}/>:""}
            {(data!==undefined && !data.length)?<p className="text-center mt-5 fs-1 fw-bold" style={{color: "white"}}>No Result Found</p>:""}
        </div>
    );
}

export default Home;