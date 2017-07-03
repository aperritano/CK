// @flow

import React from 'react';
import { type ActivityPackageT, TextInput, uuid } from 'frog-utils';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const meta = {
  name: 'ac-ck-student',
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
        accent1Color: deepOrange500,
    },
});

// const ActivityRunner = ({ logger, activityData, data, dataFn, userInfo }) =>
//     <MuiThemeProvider>
//       <div>hellllllo</div>
//       {/*<AppBar*/}
//           {/*title="Title"*/}
//           {/*iconClassNameRight="muidocs-icon-navigation-expand-more"*/}
//       {/*/>*/}
//     </MuiThemeProvider>;

const ActivityRunner = ({ logger, activityData, data, dataFn, userInfo }) => {
  return (
      <div>hellllllo
      </div>);
};

export default ({
  id: 'ac-ck-student',
  meta,
  config,
  ActivityRunner,
  Dashboard: null,
  dataStructure,
  mergeFunction
}: ActivityPackageT);
