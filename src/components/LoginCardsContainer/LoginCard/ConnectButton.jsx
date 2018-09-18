import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ConnectButton extends Component {
    // the connect button to create instances
    handleConnectClick(){
        const {oauthRedirectSend, expandConfigs, needsConfigure} = this.props;
        // if (needsConfigure){
        //     return function() {
        //         expandConfigs();
        //     }
        // } else {
            return function(){
                oauthRedirectSend();
            }
        // }
    }
    render() {
        const { connected } = this.props;
        if (connected) {
            return (
                <Button
                    variant="raised"
                    color="primary"
                >
                    Manage
                </Button>
            )
        } else {
            return (
                <Button
                    variant="raised"
                    onClick={this.handleConnectClick()}>
                    Connect
                </Button>
            )
        }

    }
}

export default ConnectButton;



