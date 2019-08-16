import React, { Component } from "react";
import {connect} from "react-redux"
import "./App.css";

import {getSmurfs} from "../Actions"
import Form from "./form.js"
import Smurf from "./smurf.js"

class App extends Component {
      constructor() {
        super();

      }
  render() {
     console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick = {this.props.getSmurfs}>Get Smurfs!</button>
        <Form />
        {this.props.smurfs.map((item, index) => {
          return <Smurf key = {index} smurf = {item} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
   
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
