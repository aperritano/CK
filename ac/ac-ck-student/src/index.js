// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import type { ActivityRunnerT, ActivityPackageT } from 'frog-utils';
import config from './config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import { AppBar, FlatButton,  FloatingActionButton} from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';

// note imports
import NoteGrid from './NoteGrid';
import NoteDialog from './NoteDialog';



const meta = {
  name: 'ac-ck-student',
  type: 'react-component'
};

const muiTheme = getMuiTheme({
  appBar: {
    height: 48,
    fontSize: 12
  },
  palette: {
    primary1Color: Colors.orange900,
    primary2Color: Colors.blue900,
    primary3Color: Colors.green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all',
});

const dataStructure = {};

const mergeFunction = (object, dataFn) => {};

export const ActivityRunner = ({ activityData, userInfo, data, dataFn }: ActivityRunnerT) => {
  return (
      <MuiThemeProvider muiTheme={muiTheme}>
            <Welcome {...{ activityData, userInfo, data, dataFn  }}/>
      </MuiThemeProvider>
    );
};

export class Welcome extends Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);
    this.state = {
      open: false,
      anchorEL: {},
    };
    this._onHandleRequestClose = this._onHandleRequestClose.bind(this);
    this._newNoteAction = this._newNoteAction.bind(this);
    this._drawerAction = this._newNoteAction.bind(this);
  }
  _onHandleRequestClose() {
    console.log('CLoser');
    this.setState({
      open: false,
    });
  }
  _drawerAction() {
    this.setState({ drawer: !this.state.drawer });
  }
  _newNoteAction() {
    this.setState({
      open: true,
    });
    console.log('dataFn',this.props);
  }
  componentWillMount() {

  }
  render() {
    const styles = {
      appBar: {
        position: 'fixed',
        flexWrap: 'wrap',
        zIndex: 1100,
        width: '100%',
        display: 'flex',
        fontFamily: 'Roboto'
      },
      uber: {
        overflow: 'hidden',
        position: 'absolute',
        backgroundColor: 'white'
      },
      floatingLabelStyle: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        zIndex: 2000,
      },
      mainContent: {
        width: '100%',
        margin: '0 auto',
        padding: '60px 0',
        overflow: 'auto !important'
      },
      gridContent: {
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 55,
      }
    };
    const { userInfo, activityData } = this.props;
    const data = activityData.data;
    return (
      <div style={styles.uber}>
        <AppBar
          style={styles.appBar}
          title="CK"
          //title={activityData.config ? activityData.config.brainstormTitle : 'NO TITLE'}
          //onLeftIconButtonTouchTap={this.drawerAction}
          iconElementRight={<FlatButton label={userInfo.name} />}
        />
        <div style={styles.gridContent}>
          <NoteGrid {...this.props} />
        </div>
        <div>
          <FloatingActionButton
            style={styles.floatingLabelStyle}
            onTouchTap={this._newNoteAction}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <NoteDialog open={this.state.open}
                    onHandleRequestClose={this._onHandleRequestClose}  {...this.props} />
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


