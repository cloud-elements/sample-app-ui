import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';

class ObjectMenu extends Component {


    render(){
        const {classes} = this.props;
        return(
            <div>
                <Divider />
                <List className={classes.list}>List sample 1</List>
                <Divider />
                <List className={classes.list}>List sample 2</List>
            </div>
        );
    }
}

export default ObjectMenu;