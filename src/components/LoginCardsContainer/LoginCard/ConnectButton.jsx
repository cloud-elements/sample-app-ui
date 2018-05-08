import React, { Component } from 'react';
import Button from 'material-ui/Button';

class ConnectButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectUrl: undefined
        };
    }

    // update state and trigger re-render when the redirectUrl is retrieved from LoginCard and passsed as new props
    componentDidUpdate(prevProps) {
        if (!prevProps.redirectUrl) {
            this.setState({
                redirectUrl: this.props.redirectUrl
            });
        }
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



