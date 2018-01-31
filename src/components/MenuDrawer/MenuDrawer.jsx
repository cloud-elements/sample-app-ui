import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: 240,
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
        this.state = {
            open: false
        };
    }

    handleDrawerClose = () => {
        this.setState({ open: false });
      };

    // componentWillMount(){
    //     let {open} = this.props;
    //     this.setState({open: open})
    // }

    render(){
        const { classes, theme, drawerWidth } = this.props;
        const { open } = this.state;
        return(
            <Drawer
              type="persistent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor='left'
              open={open}
            >
              <div className={classes.drawerInner}>
                <div className={classes.drawerHeader}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List className={classes.list}>List example 1</List>
                <Divider />
                <List className={classes.list}>List example 2</List>
              </div>
            </Drawer>
          );
    }
}

MenuDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(MenuDrawer);
