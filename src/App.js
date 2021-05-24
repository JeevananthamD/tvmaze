import React,{ Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BgAnimation from './components/BgAnimation';
import Show from './components/Show';
import Episode from './components/Episode';


class App extends Component {

  constructor(props) {
    super(props);
    // this.episodes = undefined;
    this.state = {
      searchInput: undefined,
      searchBy: "shows",
      episodes: undefined
    }
  }

  onChange = (e) => {
    this.setState({searchInput: e.target.value});
  }

  searchBy = e => {
    this.setState({searchBy: e.target.id});
  }

  getEpisodes = e => {
    this.setState({episodes: e});
  }

  render() {
    return (
      <div className="App container-fluid">
        <Navbar onChange={this.onChange} searchBy={this.searchBy}/>
        <BgAnimation/>
        <Switch>
          <Route exact path="/home"><Home searchInput={this.state.searchInput} searchBy={this.state.searchBy}/></Route>
          <Route exact path="/show/:id" render={({match}) => {
            return <Show id={match.params.id} getEpisodes={this.getEpisodes}/>
          }}/>
          <Route exact path={`/show/season/:seasonNo`} render={({match}) => {
            return <Episode seasonNo={match.params.seasonNo} episodesData={this.state.episodes}/>
          }}/>
          <Redirect from="/" exact to="/home"/>
        </Switch>
      </div>
    );
  }
 
}

export default App;
