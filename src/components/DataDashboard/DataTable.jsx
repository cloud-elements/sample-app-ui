import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  root: {
    margin: (theme.spacing.unit * 3) - 4,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Datatable extends Component {
    constructor(props) {
        super(props);
    }

    render(){
      const { classes, contentType, headers, data } = this.props;
      
      // convert contents to title
      let title;
      if (contentType) title = contentType[0].toUpperCase() + contentType.slice(1);
      return (
        <Paper className={classes.root}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {headers.map(headerText => {
                  return(
                    <TableCell>{headerText}</TableCell>
                  )
                })}
              </TableRow>
            </TableHead> 
            <TableBody>
              {data.map(n => {
                return(
                  <TableRow key={n.id}>
                    {headers.map((headerText) => {
                      return(
                        <TableCell>{n[headerText]}</TableCell>
                      )
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      );
    };
}

Datatable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Datatable);