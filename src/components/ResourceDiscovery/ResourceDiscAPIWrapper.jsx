import React, { Component } from 'react';


class ResourceListWrapper extends Component {

    // Call cloud elements to retrieve correct resources
    retrieveAvailableResources(){
        const { ceKeys, elementToken, baseUrl } = this.props;
        const path = `/objects`;
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

    render(){

    }

}