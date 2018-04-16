import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import db from 'store2';
// service for dummy data, later will be for live API calls
import {dummyGenerator, headerGenerator} from './dummyDataGenerator';


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
        this.state = {
          headers: [],
          data: this.setDefaultData(props.contentType)
        };
    }

    setDefaultData = (contentType) => {
      // const {contentType} = this.props;
      let data = [];
      switch (contentType) {
        case "contacts":
          data = [
            {id: 1, "First Name": 'Loading...', "Last Name": 'Loading...', "Email": 'Loading...', "Phone": 'Loading...'},
          ];
          break;
        case "accounts":
          data = [
            {id: 1, "Company Name": 'Loading...', "Zip Code": 'Loading...', "Phone": 'Loading...'},
          ]
          break;
        default:
          break;
      }
      return data;
    }

    updateCustomData = (contentType) => {
        // check db for instance keys, and call out for live data
        let returnData;
        if (db('hubspotcrm')){
          let liveDataRender = async () => {
            let data = await this.getObjects('SimpleContact', db('hubspotcrm'));
            let tableData = data.map((object, i) => {
              return {id: i+1, "First Name": object.firstName, "Last Name": object.lastName, "Email": object.email, "Phone": object.phoneNumber};
            });
            return await tableData;
          };
          returnData = liveDataRender();
        } else {
          returnData = dummyGenerator(contentType);
        }
        return returnData;
    }

    getObjects = (objectName, elementToken) => {
      // fix base url to be CE url not ngrok
      let {ceKeys, baseUrl} = this.props;
      let path= `/${objectName}`;
      let queryParams = `pageSize=50`;
            // The configuration for fetching data
            let config = {
                method: 'GET',
                headers: {
                'Authorization': `User ${ceKeys.userToken}, Organization ${ceKeys.orgToken}, Element ${elementToken}`,
                'Content-Type': 'application/json'
                }
            }
            const request = async () => {
                const response = await fetch(`${baseUrl}/${path}?${queryParams}`, config);
                const json = await response.json();
                return await json;
            }
            return request();
    }

    componentWillReceiveProps() {
      // update table component at correct part of lifecycle
      this.setState((prevState, props) => {
        return {
          data: this.updateCustomData(props.contentType),
          headers: headerGenerator(props.contentType)
        }
      });
    }

    render(){
      const { classes, contentType } = this.props;
      const { headers, data } = this.state;
      
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