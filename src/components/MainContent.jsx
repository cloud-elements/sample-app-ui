import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';  
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

class MainContentContainer extends Component {
    constructor(props){
        super(props);
    }

    // login cards to be rendered if the integration route is live
    integrationCards = (route) => {
        if (route === "integrations"){
            return (<LoginCardList
                ceKeys={ ceKeys}
                appUrl={ appUrl}
                route={route}
            />);
        } else {
            return null;
        }
    };
    
    // sets up the data table which is only rendered if state.route is a valid data route like "contacts"
    showDataTable = (route) => {
        if (route && route != "settings" && route != "integrations"){
            return(<DataTable
                contentType={ route }
                ceKeys={ ceKeys}
                baseUrl={"https://" + ceKeys.ceEnv + ".cloud-elements.com/elements/api-v2"}
            />);
        }
    };

    render() {
        return(
            <div>
                {/* display main content based on route */}
                <WelcomeBox route={route} />
                {integrationCards(route)}
                {showDataTable(route)}
            </div>
        );
    }
}