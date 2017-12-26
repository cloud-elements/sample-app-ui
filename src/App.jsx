import React, { Component } from 'react';
// import logo from './logo.svg';
import LoginCard from './LoginCard';
import AppBar from './AppBar';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <AppBar />
                <LoginCard />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
