// @flow

import React from 'react';
import type { ActivityRunnerT, ActivityPackageT } from 'frog-utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import config from './config';
import Main from './Main';

// note imports
import NoteGrid from './NoteGrid';
import NoteDialog from './NoteDialog';

const meta = {
  name: 'ac-ck-student',
  type: 'react-component'
};

const muiTheme = getMuiTheme(
  {
    appBar: {
      height: 48,
      fontSize: 12
    },
    palette: {
      primary1Color: Colors.orange900,
      primary2Color: Colors.blue900,
      primary3Color: Colors.green100
    }
  },
  {
    avatar: {
      borderColor: null
    },
    userAgent: 'all'
  }
);

const dataStructure = {};

const mergeFunction = (object, dataFn) => {}; // eslint-disable-line no-unused-vars

export const ActivityRunner = ({
  activityData,
  userInfo,
  data,
  dataFn
}: ActivityRunnerT) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <Main {...{ activityData, userInfo, data, dataFn }} />
  </MuiThemeProvider>;


export default ({
  id: 'ac-ck-student',
  meta,
  config,
  ActivityRunner,
  Dashboard: null,
  dataStructure,
  mergeFunction
}: ActivityPackageT);
