import React, {Component} from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class LoginCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getOAuthUrl = this.getOAuthUrl.bind(this);
      }

    getOAuthUrl() {
        let {userToken, orgToken, elementKey, vendorApiKey, vendorSecret, vendorCallbackUrl, baseUrl} = this.props;
        let path= `elements/${elementKey}/oauth/url`;
        // The query parameters with the api key, api secret, and callback url.
        let queryParams =`apiKey=${vendorApiKey}&apiSecret=${vendorSecret}&callbackUrl=${vendorCallbackUrl}`;
        // The configuration for fetching data
        let config = {
            method: 'GET',
            headers: {
            'Authorization': `User ${userToken}, Organization ${orgToken}`,
            'Content-Type': 'application/json'
            }
        }
        const request = async () => {
            const response = await fetch(`${baseUrl}/${path}?${queryParams}`, config);
            const json = await response.json();
            console.log(json);
            this.setState({
                redirectUrl: json.oauthUrl,
            })
        }
        request();
    }

    componentWillMount() {
        this.getOAuthUrl();
      }

    render(){
        let { redirectUrl } = this.state;
        let { elementKey } = this.props;
        return(
            <Card
                style={{
                    width: '400px',
                    margin: '40px',
                    float: 'left'
                }}
            >
                <CardHeader
                    title={elementKey}
                    subtitle={"Connect your "+ elementKey + " account"}
                    actAsExpander={false}
                />
                <CardActions>
                    <FlatButton
                        label="Login"
                        onClick= {function(){
                            window.location = redirectUrl
                        }}
                        />
                </CardActions>
            </Card>
        )
    }
};

export default LoginCard;