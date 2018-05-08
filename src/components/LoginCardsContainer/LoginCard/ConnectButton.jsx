import React, { Component } from 'react';
import Button from 'material-ui/Button';

class ConnectButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectUrl: undefined
        };
    }

    componentDidUpdate() {
        // const { redirectUrl } = this.props;
        this.setState((prevState, props) => {
            redirectUrl: props.redirectUrl
        });
    }

    render() {
        const { connected } = this.props;
        const { redirectUrl } = this.state;

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



