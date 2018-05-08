import React, { Component } from 'react';

import LoginCardList from './LoginCardsContainer/LoginCardList';
import WelcomeBox from './WelcomeBox';
import DataTableWrapper from './DataDashboard/DataTableWrapper';

class MainContentContainer extends Component {

    // login cards to be rendered if the integration route is live
    integrationCards = (route, ceKeys, appUrl) => {
        if (route === "integrations") {
            return (<LoginCardList
                ceKeys={ceKeys}
                appUrl={appUrl}
                route={route}
            />);
        } else {
            return null;
        }
    };

    // sets up the data table which is only rendered if route is a valid data route like "contacts"
    showDataTable = (route, ceKeys, appUrl) => {
        if (route && route !== "settings" && route !== "integrations") {
            return (<DataTableWrapper
                contentType={route}
                ceKeys={ceKeys}
                baseUrl={"https://" + ceKeys.ceEnv + ".cloud-elements.com/elements/api-v2"}
            />);
        }
    };

    render() {
        const { ceKeys, appUrl, route } = this.props;
        return (
            <div>
                {/* display main content based on route */}
                <WelcomeBox route={route} />
                {this.integrationCards(route, ceKeys, appUrl)}
                {this.showDataTable(route, ceKeys, appUrl)}
            </div>
        );
    }
}

export default MainContentContainer;