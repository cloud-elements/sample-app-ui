import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    mainTitle: {
        // fontSize: 18
    }
});

class WelcomeCard extends Component {
    render(){
        let {route, classes} = this.props;
        if (!route){
            return( <div>
              <Paper className={classes.root} elevation={4}>
                <Typography variant="display1" component="h3">
                  Welcome to your integrated application boilerplate app!
                </Typography>
                <Typography component="p">
                  Use the menu to connect to some apps or view dummy data before connecting to other data services.
                </Typography>
              </Paper>
            </div>);
          } else {
            return null;
          }
    }
}

WelcomeCard.PropTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true})(WelcomeCard);