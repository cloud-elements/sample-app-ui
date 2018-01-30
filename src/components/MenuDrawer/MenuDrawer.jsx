import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
})

class MenuDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render(){
        return(
            <Drawer
                type="persistent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
                open={open}
            >
                <div className={classes.drawerInner}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.list}>{mailFolderListItems}</List>
                <Divider />
                <List className={classes.list}>{otherMailFolderListItems}</List>
                </div>
            </Drawer>
        );
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(PersistentDrawer);
