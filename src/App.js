import React, { Component } from 'react';
// import logo from './logo.svg';
import Button from './components/Button/index.js'
// import toast from './components/toast'
// import Button from './button.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="content">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="app-form">
            <label>用户名：</label>
            <input type="text"></input><br/><br/>
              <label>密&nbsp;码：</label>
              <input type="text"></input><br/>
          </div>
        </div>

        <Button type="warn"/>

        <hr />
      </div>
    );
  }
}

export default App;
