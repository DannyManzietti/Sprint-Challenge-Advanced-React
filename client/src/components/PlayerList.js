import React from "react";
import PlayerCard from "./PlayerCard";
import axios from "axios";

class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ playerData: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="player-list">
        <PlayerCard
          playerData={this.state.playerData}
          name={this.state.playerData.name}
          country={this.state.playerData.country}
          searches={this.state.playerData.searches}
        />
      </div>
    );
  }
}

export default PlayerList;
