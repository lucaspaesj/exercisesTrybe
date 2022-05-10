import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeClicks: 0,
      numeroDeClicks2: 0,
      numeroDeClicks3: 0,
    }
  }

  handleClick() {
    this.setState(({ numeroDeClicks }) => ({
      numeroDeClicks: numeroDeClicks + 1,
    }), () => {
      console.log(`Cor Btn1 ${this.getBtnColor(this.state.numeroDeClicks)}`);
    });
  };

  handleClick2() {
    this.setState(({ numeroDeClicks2 }) => ({
      numeroDeClicks2: numeroDeClicks2 + 1,
    }), () => {
      console.log(`Cor Btn2 ${this.getBtnColor(this.state.numeroDeClicks2)}`);
    });
  };

  handleClick3() {
    this.setState(({ numeroDeClicks3 }) => ({
      numeroDeClicks3: numeroDeClicks3 + 1,
    }), () => {
      console.log(`Cor Btn3 ${this.getBtnColor(this.state.numeroDeClicks3)}`);
    });
  };

  getBtnColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <>
        <button style={{ backgroundColor: this.getBtnColor(this.state.numeroDeClicks) }} onClick={this.handleClick}>{this.state.numeroDeClicks}</button>
        <button style={{ backgroundColor: this.getBtnColor(this.state.numeroDeClicks2) }} onClick={this.handleClick2}>{this.state.numeroDeClicks2}</button>
        <button style={{ backgroundColor: this.getBtnColor(this.state.numeroDeClicks3) }} onClick={this.handleClick3}>{this.state.numeroDeClicks3}</button>
      </>
    )
  }
}


export default App;
