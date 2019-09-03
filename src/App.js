import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import reducer from "./reducers";
import { createStore } from "redux";

// const initialState = { tech: "React-Init", techies: "techies" };
// const store = createStore(reducer, initialState);

import { store } from "./store";
import ButtonGroup from './ButtonGroup';

class App extends Component {

  // state = {
  //   tech: "React-Redux"
  // };

  render () {
    // return <HelloWorld tech={this.state.tech} /> 
    return ( 
      <div>
      
      <HelloWorld key={1} tech={store.getState().tech} />
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
      </div>
    );
  }

}

export default App;
