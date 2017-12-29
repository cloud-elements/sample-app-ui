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
        let {ceKeys, vendorData, vendorCallbackUrl, baseUrl} = this.props;
        let path= `elements/${vendorData.elementKey}/oauth/url`;
        // The query parameters with the api key, api secret, and callback url.
        let queryParams =`apiKey=${vendorData.vendorApiKey}&apiSecret=${vendorData.vendorSecret}&callbackUrl=${vendorCallbackUrl}`;
        // The configuration for fetching data
        let config = {
            method: 'GET',
            headers: {
            'Authorization': `User ${ceKeys.userToken}, Organization ${ceKeys.orgToken}`,
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
        let elementName = this.props.vendorData.nameText;
        return(
            <Card
                style={{
                    width: '400px',
                    margin: '40px',
                    float: 'left'
                }}
            >
                <CardHeader
                    title={elementName}
                    subtitle={"Connect your "+ elementName + " account"}
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