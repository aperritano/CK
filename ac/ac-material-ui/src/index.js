// @flow

import React, { Component } from 'react';
import { type ActivityPackageT } from 'frog-utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green100, orange500, blue900 } from 'material-ui/styles/colors';
import { AppBar, FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin(); // eslint-disable-line react/prefer-stateless-function

const meta = {
  name: 'ac-material-ui',
  type: 'react-component'
};

const config = {
  type: 'object',
  properties: {
    title: {
      title: 'What is the title?',
      type: 'string'
    }
  }
};

const dataStructure = {};

const muiTheme = getMuiTheme(
  {
    appBar: {
      height: 48,
      fontSize: 12
    },
    palette: {
      primary1Color: orange500,
      primary2Color: blue900,
      primary3Color: green100
    }
  },
  {
    avatar: {
      borderColor: null
    },
    userAgent: 'all'
  }
);

const ActivityRunner = ({ activityData, userInfo }) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <Welcome {...{ activityData, userInfo }} />
  </MuiThemeProvider>;

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this._newNoteAction = this._newNoteAction.bind(this);
  }
  _newNoteAction() {
    // console.log('FIRED!');
  }
  render() {
    const styles = {
      appBar: {
        position: 'fixed',
        flexWrap: 'wrap'
      },
      uber: {
        overflow: 'hidden',
        position: 'absolute'
      },
      floatingLabelStyle: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
      },
      mainContent: {
        width: '100%',
        margin: '0 auto',
        padding: '60px 0',
        overflow: 'auto !important'
      }
    };

    return (
      <div style={styles.uber}>
        <AppBar style={styles.appBar} title="CK" />
        <div>
          <FloatingActionButton
            style={styles.floatingLabelStyle}
            onTouchTap={this._newNoteAction}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <div style={styles.mainContent}>
          hello
        </div>

      </div>
    );
  }
}

export default ({
  id: 'ac-material-ui',
  meta,
  config,
  ActivityRunner,
  Dashboard: null,
  dataStructure
}: ActivityPackageT);
