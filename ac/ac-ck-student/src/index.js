// @flow

import React from 'react';
import type { ActivityRunnerT, ActivityPackageT } from 'frog-utils';
import config from './config';
import {orange900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Drawer, AppBar, MenuItem, FlatButton, IconButton, Subheader, List, ListItem} from 'material-ui'
import transitions from 'material-ui/styles/transitions'

const isMobile = false;

const meta = {
  name: 'ac-ck-student',
  type: 'react-component'
};

const muiTheme = getMuiTheme({
  appBar: {
    color: orange900
    }
});

const dataStructure = {};

const mergeFunction = (object, dataFn) => {};

export const ActivityRunner = ({ activityData, userInfo }: ActivityRunnerT) => {
  return (
      <MuiThemeProvider muiTheme={muiTheme}>
            <Welcome {...{ activityData, userInfo }}/>
      </MuiThemeProvider>
    );
};

export class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = { drawer: !isMobile };
  }
  drawerAction() {
    this.setState({ drawer: !this.state.drawer });
  }
  render() {
    const baseDrawerStyle = {
      transition: transitions.easeOut(),
      top: 60,
    };
    const openDrawerStyle = {
      ...baseDrawerStyle,
      transform: 'translate(0)',
      zIndex: 90,
    };
    const closedDrawerStyle = {
      ...baseDrawerStyle,
      transform: 'translate(-300px)',
    };
    const defaultMarginLeft = isMobile ? 100 : 200;
    const marginLeft = this.state.drawer ? defaultMarginLeft : 0;
    const displayDrawer = this.state.drawer
      ? openDrawerStyle
      : closedDrawerStyle;
    // const { activityData } = this.props.activityData;
    const { data, dataFn, userInfo, activityData } = this.props;
    return (
      <div>
        <AppBar
          title={activityData.config ? activityData.config.brainstormTitle : 'NO TITLE'}
          onLeftIconButtonTouchTap={this.drawerAction.bind(this)}
          iconElementRight={<FlatButton label={userInfo.name} />}
        />
        <div style={{display: 'block'}}>
          <div style={{display: 'block'}}>
            <Drawer
                open={this.state.drawer}
                width={marginLeft}
                containerStyle={displayDrawer}
            >
              <List>
                <Subheader style={{ fontSize: 18 }}>MY BOARDS</Subheader>
              </List>
            </Drawer>
          </div>
        </div>
        <div
          className="ContentHits"
          style={{
            marginLeft,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 80,
          }}
        >

          <p>{JSON.stringify(activityData)}</p>
          <p>{JSON.stringify(userInfo)}</p>
          <p>{activityData.config ? activityData.config.text : 'NO TEXT'}</p>
        </div>
      </div>
    );
  }
}

export default ({
  id: 'ac-ck-student',
  meta,
  config,
  ActivityRunner,
  Dashboard: null,
  dataStructure,
  mergeFunction
}: ActivityPackageT);


