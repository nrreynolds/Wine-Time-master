import React, { Component } from 'react';
import './App.css';
// import Wines from './Wines';
import Wine from './Wine';
const axios = require('axios');

class App extends Component {
  constructor(){
    super();
    this.state = {
      wines: null,
      currentWine: null,
      showType: "none"
    }
  }

  getNewWines(){
    if(this.state.wines === null){
      axios.get("http://myapi-profstream.herokuapp.com/api/e72039/wines")
        .then(response => {
          this.setState({wines: response.data, showType: "all", currentWine: null})
          // this.makeButtons(response.data);
        });
    }
  }

  showAll(){
    if(this.state.wines){
      return this.state.wines.map((wine, index) => <Wine wine={wine} key={index} />);
    } else {
      return <div>Select A Wine</div>
    }
  }

  showOne(){
    const wine = this.state.currentWine;
    if(wine){
      return <Wine wine={wine} />
    } else {
      return "Select A Wine"
    }
  }

  setCurrentWine(wine){
    this.setState({currentWine: wine, showType: "one"})
  }

  makeButtons(){
    return this.state.wines.map((wine, index) => {
      return (
        <button onClick={() => this.setCurrentWine(wine)} key={index}>{`View Wine ${wine.id}`}</button>
      )
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Your Wine Cellar</h1>
        <div className="container">
          <div className="buttons-list">
            <button onClick={() => this.getNewWines()}>View All</button>
            {this.state.wines ? this.makeButtons() : ""}
          </div>
          <div className="view-window">
            {this.state.showType === "all" ? this.showAll() : this.showOne()}
            {/*{console.log(this.state.currentWine)}*/}
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
