import React, { Component } from "react";
import {connect} from "react-redux"
import "./App.css";

import {getSmurfs} from "../Actions"
import Form from "./form.js"
import Smurf from "./smurf.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick = {getSmurfs}>Get Smurfs!</button>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
