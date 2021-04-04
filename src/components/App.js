import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: false
    };
    this.hadleclick = this.handleclick.bind(this);
  }
  handleclick() {
    console.log("clicked");
    if (this.state.para === false) {
      this.setState({ para: true });
    }
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}

        <button id="click" onClick={this.hadleclick}>
          click
        </button>
        <p id="para">
          {this.state.para
            ? "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
            : ""}
        </p>
      </div>
    );
  }
}

export default App;
