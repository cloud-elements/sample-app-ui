import React, {Component} from 'react';
// import logo from './logo.svg';
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Navigation from './components/NavBar/NavBar';
import { withTheme } from 'material-ui/styles'

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

// const theme = createMuiTheme();

class App extends Component {
    constructor(props) {
        super(props);
        // Cloud Elements tokens to be used. This should be your admin account where you want to monitor all users' instances
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
        let {ceKeys, appUrl} = this.state;
        // The Navigation component is the highest level component, it controls the view and routes
        return ( 
            // <MuiThemeProvider theme={theme}>
            //     <Navigation
            //         ceKeys = {ceKeys}
            //         appUrl = {appUrl}
            //     />
            // </MuiThemeProvider>
            <div className = "App">
                <Navigation
                    ceKeys = {ceKeys}
                    appUrl = {appUrl}
                /> 
            </div>
            );
    }
}

export default withTheme()(App);