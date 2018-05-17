import React, { Component } from 'react';
import Button from 'material-ui/Button';

class ConnectButton extends Component {
    // the connect button to create instances
    render() {
        const { connected, oauthRedirectSend } = this.props;
        if (!connected) {
            return (
                <Button
                    raised
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
                    raised
                    color="primary"
                >
                    Manage
                </Button>
            )
        }

    }
}

export default ConnectButton;



