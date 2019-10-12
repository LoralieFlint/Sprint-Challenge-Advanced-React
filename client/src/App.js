import React from 'react';
import './App.css';

import axios from "axios";
import PlayerList from "./Hooks/PlayerList"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerInfo: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        const playerAPI = res.data;
        console.log(res.data)
        this.setState({
          playerInfo: playerAPI
        })
      })
      .catch(err => {
        console.log("ERROR", err)
      })
  }
  

  render() {
    return (
      <div className="App">
        <PlayerList playerInfo={this.state.playerInfo}/>
        {/* <h1>Hello World!</h1> */}
      </div>
    );


  }
 
}

export default App;
