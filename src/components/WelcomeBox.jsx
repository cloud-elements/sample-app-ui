import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        // maxWidth: 100% - (theme.spacing.unit * 3),
        // marginRight: theme.spacing.unit * 3,

    }),
    cardTitle: {
        'font-size': 26
    }
});

class WelcomeCard extends Component {
    render() {
        const { route, classes } = this.props;

        // Primative routing displays welcome message when route is null or undefined
        if (!route) {
            return (
                <div>
                    <Paper className={classes.root} elevation={4}>
                        <Typography component="h2" className={classes.cardTitle}>
                            Welcome to your integrated application boilerplate app!
                        </Typography>
                        <Typography component="p" style={{ marginTop: 10 }}>
                            Use the menu to connect to some apps or view dummy data before connecting to other data services.
                        </Typography>
                    </Paper>
                </div>
            );
        } else {
            return null;
        }
    }
}

WelcomeCard.PropTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeCard);