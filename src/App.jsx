import React, {Component} from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import { withTheme } from '@material-ui/core/styles'

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

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
        const {ceKeys, appUrl} = this.state;
        // The Navigation component is the highest level component, it controls the view and routes
        return (
            <div className = "App">
                <NavBar
                    ceKeys = {ceKeys}
                    appUrl = {appUrl}
                /> 
            </div>
            );
    }
}

export default withTheme()(App);
// export default App;