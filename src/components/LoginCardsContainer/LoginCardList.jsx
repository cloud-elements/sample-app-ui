import React, {Component} from 'react';
import LoginCard from './LoginCard/LoginCard.jsx';
import './LoginCardList.css';

class LoginCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Authentication tokens specific to each vendor to be included in login options
            // To add more elements, simply add an object to the elements array, for example uncomment the "salesforce" object
            elements: [
                {
                    nameText: "Hubspot Marketing",
                    elementKey: "hubspot",
                    vendorApiKey: process.env.REACT_APP_HUBSPOT_KEY,
                    vendorSecret: process.env.REACT_APP_HUBSPOT_SECRET
                },
                // {
                //     nameText: "Salesforce",
                //     elementKey: "sfdc",
                //     vendorApiKey: process.env.REACT_APP_SFDC_KEY,
                //     vendorSecret: process.env.REACT_APP_SFDC_SECRET
                // }
            ]
        };
    }

    renderLoginCards() {
        // retrieve generic app info from the props passed by App.jsx
        let { ceKeys, appUrl, errorMessage } = this.props;
        // return as many LoginCards as needed for the number of elements in the state.elements array
        return this.state.elements.map(element => (
            <LoginCard 
                key={ element.elementKey }
                vendorData={ element }
                ceKeys={ ceKeys }
                errorMessage={ errorMessage }
                baseUrl={'https://' + ceKeys.ceEnv + '.cloud-elements.com/elements/api-v2'}
                vendorCallbackUrl={ appUrl }
            />
        ));
      }

      render() {
        return (
          <div className="LoginCardList">
            {this.renderLoginCards()}
          </div>
        );
      }
}

export default LoginCardList;