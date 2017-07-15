// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { type ActivityPackageT, TextInput, uuid } from 'frog-utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700, orange500, blue900} from 'material-ui/styles/colors';
import { AppBar, FlatButton, FloatingActionButton} from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

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

const mergeFunction = (object, dataFn) => {};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    primary2Color: blue900,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all',
});

const ActivityRunner = ({ logger, activityData, data, dataFn, userInfo }) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <Welcome {...{ activityData, userInfo }}/>
  </MuiThemeProvider>;

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.setState({
      isKeyboardFocused: false,
    });
    this._newNoteAction = this._newNoteAction.bind(this);
  }
  _newNoteAction() {
    console.log('FIRED!');
  }
  render() {

    const style = {
      marginRight: 20,
    };

    return (
      <div>
        <AppBar
          title="CK"
        />
        <div>
          <FloatingActionButton  style={style} onTouchTap={this._newNoteAction}>
            <ContentAdd />
          </FloatingActionButton>
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
  dataStructure,
  mergeFunction
}: ActivityPackageT);
