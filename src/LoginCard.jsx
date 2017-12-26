import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class LoginCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getOAuthUrl = this.getOAuthUrl.bind(this);
      }

    getOAuthUrl() {
        let {userToken, orgToken, elementToken, baseUrl} = this.props;
        // let baseUrl = 'https://api.cloud-elements.com/elements/api-v2';
        let path= 'contacts';
        // The configuration for fetching data
        let config = {
            method: 'GET',
            headers: {
            'Authorization': `User ${userToken}, Organization ${orgToken}, Element ${elementToken}`,
            'Content-Type': 'application/json'
            }
        }
        fetch(`${baseUrl}/${path}`, config)
            .then(response => response.json())
            .then(responseJson => {
            this.setState({
                resources: responseJson,
            })
            })
    }

    render(){
        return(
            <Card
                style={{
                    width: '400px',
                    margin: '40px',
                    float: 'left'
                }}
            >
                <CardHeader
                    title="Hubspot"
                    subtitle="Connect your Hubspot account"
                    actAsExpander={false}
                />
                <CardActions>
                    <FlatButton
                        label="Login"
                        />
                </CardActions>
            </Card>
        )
    }
};

export default LoginCard;