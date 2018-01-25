import React, {Component} from 'react';
import Button from 'material-ui/Button';

class ConnectButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        let {connected, redirectUrl} = this.props;
        if (!connected) {
            return(
                <Button
                    raised
                    onClick= {function(){
                        window.location = redirectUrl
                    }}
                >
                    Connect
                </Button>
            )
        } else {
            return(
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



