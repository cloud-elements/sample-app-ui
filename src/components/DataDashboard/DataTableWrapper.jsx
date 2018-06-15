import React, { Component } from 'react';
import { dummyDataGenerator, dummyHeaderGenerator } from './dummyDataGenerator';
import DataTable from './DataTable';
import db from 'store2';

class DataTableWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHeader: null,
            tableData: null
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

    // TODO: make this function with .map
    setDefaultData = (contentType) => {
        let data = [{}];
        this.headerRow(contentType).forEach(header => {
            data[0][header] = 'Loading...';
        });
        return data;
    }

    retrieveLiveData = async (contentType) => {
        // check db for instance keys, and call out for live data
        if (contentType === "contacts") {
            if (db.get('hubspotcrm')) {
                const liveDataRender = async () => {
                    const data = await this.getObjects('SimpleContact', db.get('hubspotcrm'));
                    // transform returned data
                    // TODO: is this necessary?
                    const tableData = data.map((object, i) => {
                        return { id: i + 1, "First Name": object.firstName, "Last Name": object.lastName, "Email": object.email, "Phone": object.phoneNumber };
                    });
                    return await tableData;
                };
                return await liveDataRender();
            }
        } else if (contentType === 'orders') {
            if (db.get('shopify')) {
                const liveDataRender = async () => {
                    const data = await this.getObjects('SimpleOrders', db.get('shopify'));
                    // transform returned data
                    // TODO: is this necessary?
                    const tableData = data.map((object, i) => {
                        return { id: i + 1, "Order Total": object.totalValue, "Num of Items": object.numItems, "Email": object.email, "Status": object.status };
                    });
                    console.log(tableData);
                    return await tableData;
                };
                return await liveDataRender();
            }
        } else {
            return dummyDataGenerator(contentType);
        }
    }

    getObjects = (objectName, elementToken) => {
        const { ceKeys, baseUrl } = this.props;
        const path = `/${objectName}`;
        const queryParams = `pageSize=50`;
        // The configuration for fetching data
        const config = {
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

    // get the correct headers and data to be pushed to the table
    getDataforTable() {
        const { contentType } = this.props;
        console.log('whats in that db?? ------');
        console.log(db.getAll()); // returns obj with keys in storage
        console.log("---------------");
        // for now should always fail
        //TODO: change to (db.getAll()) ... and deal with real data!
        if (db.getAll().shopify) {
            // retrieve live data
            this.setState({
                tableHeader: this.headerRow(contentType),
                tableData: this.setDefaultData(contentType)
            });
            this.retrieveLiveData(contentType);
        } else {
            // set defaults
            this.setState({
                tableHeader: this.headerRow(contentType),
                tableData: dummyDataGenerator(contentType),
            });
        }
    }

    // when component shows up, decide what to do first
    componentWillMount() {
        console.log("mounting...");
        this.getDataforTable();
    }
    // when component is updated with new contentType/route update table
    componentDidUpdate(prevProps) {
        if (prevProps.contentType !== this.props.contentType) {
            console.log('updating...');
            this.getDataforTable();
        }
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