import React,{ Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BgAnimation from './components/BgAnimation';
import Show from './components/Show';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: undefined,
      searchBy: "shows"
    }
  }

  onChange = (e) => {
    this.setState({searchInput: e.target.value});
  }

  searchBy = e => {
    this.setState({searchBy: e.target.id});
  }

  render() {
    return (
      <div className="App container-fluid">
        <Navbar onChange={this.onChange} searchBy={this.searchBy}/>
        <BgAnimation/>
        <Switch>
          <Route exact path="/home"><Home searchInput={this.state.searchInput} searchBy={this.state.searchBy}/></Route>
          <Route exact path="/show/:id" component={Show}/>
          <Redirect from="/" exact to="/home"/>
        </Switch>
      </div>
    );
  }
 
}

export default App;
