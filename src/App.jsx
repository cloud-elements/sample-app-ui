import React, { Component } from 'react';
// import logo from './logo.svg';
import LoginCardList from './LoginCardList';
import AppBar from './AppBar';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


class App extends Component {
    constructor(props) {
        super(props);
        // Cloud Elements tokens to be used with all vendor apps
        const ce_keys = {
            orgToken: process.env.REACT_APP_CE_ORG,
            userToken: process.env.REACT_APP_CE_USER,
            ceEnv: process.env.REACT_APP_CE_ENV,
        };
        this.state = {
            ceKeys: ce_keys,
            appUrl: process.env.REACT_APP_URL
        }
    }

  render() {
    let { ceKeys, appUrl } = this.state;
    return (
        <MuiThemeProvider>
            <div className="App">
                <AppBar />
                <LoginCardList
                    ceKeys={ ceKeys}
                    appUrl={ appUrl}
                />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
