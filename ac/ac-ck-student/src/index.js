// @flow

import React from 'react';
import { type ActivityPackageT} from 'frog-utils';
import config from './config';
import {orange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const meta = {
  name: 'ac-ck-student',
  type: 'react-component'
};

const dataStructure = {};

const mergeFunction = (object, dataFn) => {};

// const ActivityRunner = ({ logger, activityData, data, dataFn, userInfo }) =>
//     <MuiThemeProvider>
//       <div>hellllllo</div>
//       {/*<AppBar*/}
//           {/*title="Title"*/}
//           {/*iconClassNameRight="muidocs-icon-navigation-expand-more"*/}
//       {/*/>*/}
//     </MuiThemeProvider>;

const muiTheme = getMuiTheme({
  appBar: {
    color: orange500
  }
});

const ActivityRunner = ({ logger, activityData, data, dataFn, userInfo }) => {
  return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          title={activityData.config ? activityData.config.title : 'NO TITLE'}
        // iconElementLeft={<IconButton><NavigationClose /></IconButton>
          iconElementRight={<FlatButton label={userInfo.name} />}
        />
      </div>
      </MuiThemeProvider>);
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
