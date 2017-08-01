// @flow

import React from 'react';
import type { ActivityRunnerT, ActivityPackageT } from 'frog-utils';
import { MuiThemeProvider } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import {grey, amber, red} from 'material-ui/colors';
import config from './config';
import Main from './Main';

// note imports
// import NoteGrid from './NoteGrid';
// import NoteDialog from './NoteDialog';

const meta = {
  name: 'ac-ck-student',
  type: 'react-component'
};

const muiTheme = createMuiTheme(
  {
    palette: createPalette({
      primary: grey,
      accent: amber,
      error: red,
      type: 'dark'
    })
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
