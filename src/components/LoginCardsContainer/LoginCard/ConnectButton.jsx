import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ConnectButton extends Component {
    // the connect button to create instances
    render() {
        const { connected, oauthRedirectSend } = this.props;
        if (!connected) {
            return (
                <Button
                    variant="raised"
                    onClick={function(){
                        oauthRedirectSend();
                    }}
                >
                    Connect
                </Button>
            )
        } else {
            return (
                <Button
                    variant="raised"
                    color="primary"
                >
                    Manage
                </Button>
            )
        }

    }
}

export default ConnectButton;



