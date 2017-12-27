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
    constructor(props) {
        super(props);
        // Authentication tokens specific to the app and env
        this.state = {
            orgToken: process.env.REACT_APP_CE_ORG,
            userToken: process.env.REACT_APP_CE_USER,
            ceEnv: process.env.REACT_APP_CE_ENV,
            vendorApiKey: process.env.REACT_APP_HUBSPOT_KEY,
            vendorSecret: process.env.REACT_APP_HUBSPOT_SECRET,
            appUrl: process.env.REACT_APP_URL
        }
    }

    // Helper Function
    setElementToken(token) {
        this.setState({
            elementToken: token
        })
    }

    // Error handling
    setErrorMessage(message) {
        this.setState({
            errorMessage: message
        })
    }
  render() {
    let { userToken, orgToken, elementToken, vendorSecret, vendorApiKey, appUrl, ceEnv, errorMessage } = this.state;
    return (
        <MuiThemeProvider>
            <div className="App">
                <AppBar />
                <LoginCard 
                    vendorSecret={ vendorSecret }
                    vendorApiKey={ vendorApiKey }
                    orgToken={ orgToken }
                    userToken={ userToken }
                    elementToken={ elementToken }
                    errorMessage={ errorMessage }
                    baseUrl={'https://' + ceEnv + '.cloud-elements.com/elements/api-v2'}
                    vendorCallbackUrl={ appUrl }
                />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
