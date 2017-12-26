import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const LoginCard = () => (
  <Card
    style={{
        width: '400px',
        margin: '40px',
        float: 'left'
    }}
  >
    <CardHeader
      title="Hubspot"
      subtitle="Connect your Hubspot account"
      actAsExpander={false}
    />
    <CardActions>
      <FlatButton
        label="Login"
        style={{
            background: "#a3a3a3",
            color: "#fff"
        }}
        />
    </CardActions>
  </Card>
);

export default LoginCard;