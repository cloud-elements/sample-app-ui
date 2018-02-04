import React, {Component} from 'react';
// import logo from './logo.svg';
// import LoginCardList from './components/LoginCardsContainer/LoginCardList';
import Navigation from './components/NavBar/NavBar';
// import DataTable from './components/DataDashboard/DataTable';

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
        let {ceKeys, appUrl} = this.state;
        return ( 
            <div className = "App">
                <Navigation ceKeys = {ceKeys}
                    appUrl = {appUrl}
                /> {/* <LoginCardList
                        ceKeys={ ceKeys}
                        appUrl={ appUrl}
                    />
                    <DataTable /> */
            } { /* TODO: Add dashboard for more data */ } 
            { /* <DataDashboard /> */ } 
            </div>
            );
    }
}

export default App;