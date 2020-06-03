import React, { Component } from "react";

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = { showing: this.props.showing };
  }

  change = () => {
    if (this.state.showing ===true) {
      this.setState({ showing: false });
    } else {
      this.setState({ showing: true });
    }
  };

  filesShowing = () => {
    if (this.state.showing == true) {
      return (
        <ul>
         
          <li>File 1</li>
          <li>File 2</li>
          <li>File 3</li>
        </ul>
        
      );
    }
  };

  render() {
    return (
      <>
        <h1>Home</h1>
        <button showing={this.state.showing} onClick={this.change}>
          Toggle
        </button>
        {this.filesShowing()}
      </>
    );
  }
}

export default Folder;