import React, { Component } from 'react';
import LoginCard from './LoginCard/LoginCard.jsx';
import GridList from '@material-ui/core/GridList';
import './LoginCardList.css';

class LoginCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Authentication tokens specific to each vendor to be included in login options
            // To add more elements, simply add an object to the elements array, for example uncomment the "marketo" object
            elements: [
                {
                    nameText: "Hubspot Marketing",
                    elementKey: "hubspotcrm",
                    vendorApiKey: process.env.REACT_APP_HUBSPOT_KEY,
                    vendorSecret: process.env.REACT_APP_HUBSPOT_SECRET
                },
                {
                    nameText: "Salesforce",
                    elementKey: "sfdc",
                    vendorApiKey: process.env.REACT_APP_SFDC_KEY,
                    vendorSecret: process.env.REACT_APP_SFDC_SECRET
                },
                {
                    nameText: "Quickbooks",
                    elementKey: "quickbooks",
                    vendorApiKey: process.env.REACT_APP_QUICKBOOKS_KEY,
                    vendorSecret: process.env.REACT_APP_QUICKBOOKS_SECRET,
                    configs: {
                        sandbox: "boolean"
                    }
                },
                {
                    nameText: "Shopify",
                    elementKey: "shopify",
                    vendorApiKey: process.env.REACT_APP_SHOPIFY_KEY,
                    vendorSecret: process.env.REACT_APP_SHOPIFY_SECRET,
                    configs: {
                        siteAddress: "string"
                    }
                }
                // {
                //     nameText: "Marketo",
                //     elementKey: "marketo",
                //     vendorApiKey: process.env.REACT_APP_MARKETO_KEY,
                //     vendorSecret: process.env.REACT_APP_MARKETO_SECRET
                // },
            ]
        };
    }

    render() {
        // retrieve element data from the state obj above
        const { elements } = this.state;
        // retrieve generic app info from the props passed by App.jsx
        const { ceKeys, appUrl, errorMessage } = this.props;
        // return as many LoginCards as needed for the number of elements in the state.elements array
        return (
            <GridList cols={3}>
                {elements.map(element => (
                    <LoginCard
                        key={element.elementKey}
                        vendorData={element}
                        ceKeys={ceKeys}
                        errorMessage={errorMessage}
                        baseUrl={'https://' + [ceKeys.ceEnv || 'api'] + '.cloud-elements.com/elements/api-v2'}
                        vendorCallbackUrl={appUrl}
                    />
                ))}
            </GridList>
        );
    }
}

export default LoginCardList;