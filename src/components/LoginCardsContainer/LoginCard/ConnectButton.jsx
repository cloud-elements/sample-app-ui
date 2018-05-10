import React, { Component } from 'react';
import Button from 'material-ui/Button';

class ConnectButton extends Component {

    render() {
        const { connected, redirectUrl } = this.props;
        // const { redirectUrl } = this.state;

        if (!connected && !redirectUrl) {
            return (
                <Button raised>
                    Loading...
                </Button>
            )
        } else if (!connected) {
            return (
                <Button
                    raised
                    onClick={function () {
                        window.location = redirectUrl
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



