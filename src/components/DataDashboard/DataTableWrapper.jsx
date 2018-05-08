import React, { Component } from 'react';
import { dummyDataGenerator, dummyHeaderGenerator } from './dummyDataGenerator';
import DataTable from './DataTable';
import db from 'store2';

class DataTableWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHeader: this.headerRow(props.contentType),
            tableData: this.setDefaultData(props.contentType)
        };
        this.headerRow = this.headerRow.bind(this);
        this.setDefaultData = this.setDefaultData.bind(this);
    }

    //check for settings and create header row for table
    headerRow = (contentType) => {
        if (db.has(contentType)) {
            // TODO: get custom headers from db
        } else {
            return dummyHeaderGenerator(contentType);
        }
    }

    setDefaultData = (contentType) => {
        let data = [{}];
        this.headerRow(contentType).forEach(header => {
            data[0][header] = 'Loading...';
        });
        return data;
    }

    updateCustomData = (contentType) => {
        // check db for instance keys, and call out for live data
        let returnData;
        if (db('hubspotcrm')) {
            let liveDataRender = async () => {
                let data = await this.getObjects('SimpleContact', db('hubspotcrm'));
                let tableData = data.map((object, i) => {
                    return { id: i + 1, "First Name": object.firstName, "Last Name": object.lastName, "Email": object.email, "Phone": object.phoneNumber };
                });
                return await tableData;
            };
            returnData = liveDataRender();
        } else {
            returnData = dummyDataGenerator(contentType);
        }
        return returnData;
    }

    getObjects = (objectName, elementToken) => {
        // fix base url to be CE url not ngrok
        let { ceKeys, baseUrl } = this.props;
        let path = `/${objectName}`;
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
                tableHeader: this.headerRow(props.contentType),
                tableData: this.updateCustomData(props.contentType),
            }
        });
    }

    render() {
        const { contentType } = this.props;
        const { tableHeader, tableData } = this.state;

        return (
            <DataTable
                contentType={contentType}
                data={tableData}
                headers={tableHeader}
            />);
    }

}

export default DataTableWrapper;