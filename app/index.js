import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return (
      <div>Hello from the 1rst React Components</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
