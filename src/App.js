import React, { Component } from 'react';
import Athlete1 from './assignment1/athlete';
import FilterAthletes from './assignment2/filter';
import Athlete from './assigment3/filterAndMap';
class App extends Component {
  render() {
    
    return (
      <div>

     
        <Athlete1 />
        <FilterAthletes />
        <Athlete />
      </div>
    );
  }
}

export default App;
