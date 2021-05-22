import React,{ Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: undefined
    }
  }

  onChange = (e) => {
    if(e.target.value.length < 2) {
      setTimeout(() => {
        this.setState({searchInput: e.target.value});
      }, 500);
    }
    else {
      this.setState({searchInput: e.target.value});
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <Navbar onChange={this.onChange}/>
        <Switch>
          <Route exact path="/"><Home searchInput={this.state.searchInput}/></Route>
        </Switch>
      </div>
    );
  }
 
}

export default App;
