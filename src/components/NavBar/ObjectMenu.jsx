import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactIcon from '@material-ui/icons/Contacts';
import IntegrationIcon from '@material-ui/icons/Extension';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountIcon from '@material-ui/icons/Work';

const styles = theme => ({
    root: {
      width: '100%',
    //   maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });

class ObjectMenu extends Component {
    // TODO: add constructor for routing etc
    constructor(props) {
        super(props);
        this.state = {};
    }

    // TODO: make objectMenu based on array of objects
    render() {
        const { classes, tableChanger } = this.props;
        return (
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
                    <ListItem button onClick={() => tableChanger("settings")}>
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

ObjectMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
//   export default withStyles(styles)(SimpleList);
export default withStyles(styles)(ObjectMenu)


  
//   function SimpleList(props) {
//     const { classes } = props;
//     return (
//       <div className={classes.root}>
//         <List component="nav">
//           <ListItem button>
//             <ListItemIcon>
//               <InboxIcon />
//             </ListItemIcon>
//             <ListItemText primary="Inbox" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon>
//               <DraftsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Drafts" />
//           </ListItem>
//         </List>
//         <Divider />
//         <List component="nav">
//           <ListItem button>
//             <ListItemText primary="Trash" />
//           </ListItem>
//           <ListItem button component="a" href="#simple-list">
//             <ListItemText primary="Spam" />
//           </ListItem>
//         </List>
//       </div>
//     );
//   }
  
  


