import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import ContactIcon from 'material-ui-icons/Contacts';
import IntegrationIcon from 'material-ui-icons/Extension';
import SettingsIcon from 'material-ui-icons/Settings';
import AccountIcon from 'material-ui-icons/Work';

class ObjectMenu extends Component {
    // TODO: add constructor for routing etc
    constructor(props) {
        super(props);
        this.state = {};
        // this.routeToTable = this.routeToTable.bind(this);
    }

    render(){
        const {classes, tableChanger} = this.props;
        return(
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button onClick={() => tableChanger("contacts")}>
                        <ListItemIcon>
                            <ContactIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                    </ListItem>
                    <ListItem button onClick={() => tableChanger("accounts")}>
                        <ListItemIcon>
                            <AccountIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accounts" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav">
                    <ListItem button onClick={() => tableChanger("integrations")}>
                        <ListItemIcon>
                            <IntegrationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Integrations" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default ObjectMenu;


