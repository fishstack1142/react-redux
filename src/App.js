import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { tech: "React-Init", techies: "techies" };
const store = createStore(reducer, initialState);



class App extends Component {

  // state = {
  //   tech: "React-Redux"
  // };

  render () {

    // return <HelloWorld tech={this.state.tech} /> 
    return <HelloWorld tech={store.getState().techies} /> 
  };
}

export default App;
