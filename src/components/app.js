import React, { Component } from 'react';
import ShowDetails from '../containers/ShowDetails'
import AddDetails from '../containers/AddDetails'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddDetails />
        <ShowDetails />
      </div>
    );
  }
}
