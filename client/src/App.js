import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerData from './__playerData__/PlayerData'

const playersApi = 'http://localhost:5000/api/players'

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        playersInfo: []
      }
  }

  componentDidMount() {
    axios.get(playersApi)
    .then((res) => {
      this.setState({playersInfo: res.data})
    })
    .catch((err) => {
      debugger
    })
  }

  render () {
    return (
    <div className="App">
      <PlayerData playersInfo={this.state.playersInfo} />
    </div>
  );
  }
  
}

export default App;
