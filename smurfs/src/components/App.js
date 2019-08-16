import React, { Component } from "react";
import {connect} from "react-redux"
import "./App.css";
import Styled from "styled-components";

import {getSmurfs, removeSmurf} from "../Actions"

import smurfsImage from "../Assets/the-smurfs.jpg"
import Form from "./form.js"
import Smurf from "./smurf.js"



const Image = Styled.img `
  width: 400px;
  display: flex;
  margin:  0 auto 30px auto;

`

const AppContainer = Styled.div `
  display: flex;
  flex-direction: column;

`

const GetSmurfsButton = Styled.button `
  width: 150px;
  height: 40px;
  padding: 5px 10px;
  border: 2px solid #e52103;
  color: #00b9ef;
  font-size: 1.3rem;
  margin: auto;
  border-radius: 10px;

`

const Header = Styled.h1 `
  color: black;
  text-decoration: underline #e52103;

`

const SmurfCards = Styled.div `
  display: flex;
  flex-direction: row wrap;
  margin: auto;


`



class App extends Component {
  
      constructor() {
        super();

      }
  render() {
     console.log(this.props.smurfs)
    return (
      <AppContainer className="App">
        <Header>SMURFS! 2.0 W/ Redux</Header>
        <Image src = {smurfsImage} alt = "Smurfs Family" />
        <GetSmurfsButton onClick = {this.props.getSmurfs}>Get Smurfs!</GetSmurfsButton>
        <h3>Add a Smurf to the Family!</h3>
        <Form />
        <SmurfCards>
        {this.props.smurfs.map((item, index) => {
          return <Smurf removeSmurf = {this.props.removeSmurf} key = {index} smurf = {item} />
        })}
        </SmurfCards>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
   
  }
}

export default connect(mapStateToProps, {getSmurfs, removeSmurf})(App);
