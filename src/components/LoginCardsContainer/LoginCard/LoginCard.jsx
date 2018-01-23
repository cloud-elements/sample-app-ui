import React, {Component} from 'react';
import Card, { CardActions, CardHeader} from 'material-ui/Card';
import Button from 'material-ui/Button';
import queryString from 'query-string';
import { instanceBody } from '../../../ce-util';
import db from 'store2';

class LoginCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getOAuthUrl = this.getOAuthUrl.bind(this);
        this.createInstance = this.createInstance.bind(this);
      }

    getOAuthUrl() {
        let {ceKeys, vendorData, vendorCallbackUrl, baseUrl} = this.props;
        let path= `elements/${vendorData.elementKey}/oauth/url`;
        // let callbackUrl = vendorCallbackUrl + '/' + vendorData.elementKey + "/auth";
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

    createInstance(oauthCode, state){
        let {ceKeys, vendorData, vendorCallbackUrl, baseUrl} = this.props;
        let path= `elements/${vendorData.elementKey}/instances`;
        let body= instanceBody(vendorData.elementKey, oauthCode, vendorCallbackUrl, vendorData, state)
        let config = {
            method: 'POST',
            headers: {
                'Authorization': `User ${ceKeys.userToken}, Organization ${ceKeys.orgToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        const request = async () => {
            console.log(config);
            const response = await fetch(`${baseUrl}/${path}`, config);
            const json = await response.json();
            console.log(response);
            // console.log(response);
            if (await json.token){
                await db(state, json.token);
            }
        }
        request();
    }



    componentWillMount() {
        let {vendorData} = this.props;
        let queryParams = queryString.parse(window.location.search);
        // If an OAuth code is not detected retrieve the OAuth redirect url, if one is detected use it to create an instance
        if(!queryParams.code) {
        this.getOAuthUrl();
        } else if (queryParams.state === vendorData.elementKey){
        this.createInstance(queryParams.code, queryParams.state);
        }
      }

    render(){
        let { redirectUrl } = this.state;
        let elementName = this.props.vendorData.nameText;
        return(
            <Card
                className="LoginCard"
                style={{
                    margin: '20px',
                    float: 'left'
                }}
            >
                <CardHeader
                    title={elementName}
                    subheader={"Connect your "+ elementName + " account"}
                />
                <CardActions>
                    <Button
                        raised
                        onClick= {function(){
                            window.location = redirectUrl
                        }}
                    >
                        Login
                    </Button>
                </CardActions>
            </Card>
        )
    }
};

export default LoginCard;