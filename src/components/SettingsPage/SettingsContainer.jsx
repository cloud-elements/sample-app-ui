import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        // maxWidth: 100% - (theme.spacing.unit * 3),
        marginRight: theme.spacing.unit * 3,
        
      }),
    cardTitle: {
        'font-size': 26
    }
});

class SettingsContainer extends Component {
    render(){
        const {route, classes } = this.props;
        // console.log(Object.keys(classes));
        
        if (!route){
            return( 
                <div>
                    <Paper className={classes.root} elevation={4}>
                        <Typography component="h2" className={classes.cardTitle}>
                            Settings
                        </Typography>
                        <Typography component="p" style={{marginTop: 10}}>
                            Table of available resources will go here:
                        </Typography>
                    </Paper>
                </div>
            );
          } else {
            return null;
          }
    }
}

SettingsContainer.PropTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsContainer);