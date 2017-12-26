import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Simple SaaS App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
        background: "#a3a3a3"
    }}
  />
);

export default AppBarExampleIcon;