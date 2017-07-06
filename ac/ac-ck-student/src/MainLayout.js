import React, { Component } from 'react';
import {blue900} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'

const muiTheme = getMuiTheme({
  appBar: {
    color: blue900
  }
});

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { activityData } = this.props.activityData;
    const { userInfo } = this.props.userInfo;
    const { data, dataFn } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title={activityData.config ? activityData.config.title : 'NO TITLE'}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={<FlatButton label={userInfo.name} />}
          />

        </div>
      </MuiThemeProvider>
    );

  }
}

export default MainLayout;