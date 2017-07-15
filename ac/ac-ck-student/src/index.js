// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import type { ActivityRunnerT, ActivityPackageT } from 'frog-utils';
import config from './config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import {green100, green500, green700, orange500, blue900} from 'material-ui/styles/colors';

import { Drawer, AppBar, FlatButton, Paper, makeSelectable, List, ListItem, FloatingActionButton} from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add';
import transitions from 'material-ui/styles/transitions'
import NoteGrid from './NoteGrid';
import testData from './test_data';
// NotePopover
import NoteDialog from './NoteDialog';
import injectTapEventPlugin from 'react-tap-event-plugin';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const isMobile = false;

const meta = {
  name: 'ac-ck-student',
  type: 'react-component'
};

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

const dataStructure = {};

const mergeFunction = (object, dataFn) => {};

export const ActivityRunner = ({ activityData, userInfo }: ActivityRunnerT) => {
  return (
      <MuiThemeProvider muiTheme={muiTheme}>
            <Welcome {...{ activityData, userInfo }}/>
      </MuiThemeProvider>
    );
};

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: !isMobile,
      open: false,
      anchorEL: {},
    };

    this._onHandleRequestClose = this._onHandleRequestClose.bind(this);
    this._newNoteAction = this._newNoteAction.bind(this);
    this._drawerAction = this._newNoteAction.bind(this);
  }
  _onHandleRequestClose() {
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
  handleAddMenu = (e) => {
    e.stopPropagation();
    console.log("Opening New Menu Form");
  }
  componentWillMount() {
    injectTapEventPlugin();
  }
  render() {
    const baseDrawerStyle = {
      transition: transitions.easeOut(),
      top: 60,
    };
    const openDrawerStyle = {
      ...baseDrawerStyle,
      transform: 'translate(0)',
      //zIndex: 90,
    };
    const closedDrawerStyle = {
      ...baseDrawerStyle,
      transform: 'translate(-300px)',
    };
    const buttonStyle = {
      backgroundColor: Colors.redA200,
      position: 'absolute',
      bottom: '50px',
      right: '40px',
      zDepth: 999
    };
    const defaultMarginLeft = isMobile ? 100 : 200;
    const marginLeft = this.state.drawer ? defaultMarginLeft : 0;
    const displayDrawer = this.state.drawer
      ? openDrawerStyle
      : closedDrawerStyle;
    const { userInfo, activityData } = this.props;
    const data = activityData.data;
    console.log('test data', testData);
    console.log('data', data);
    return (
      <div>
        <AppBar
          title="CK"
          //title={activityData.config ? activityData.config.brainstormTitle : 'NO TITLE'}
          onLeftIconButtonTouchTap={this.drawerAction}
          iconElementRight={<FlatButton label={userInfo.name} />}
        />
        <div style={{display: 'block'}}>
          <div style={{display: 'block'}}>
            <Drawer
                open={this.state.drawer}
                width={marginLeft}
                containerStyle={displayDrawer}
            >
              <SelectableList defaultValue={5}>
                <ListItem primaryText="NEW NOTE TEST"  onTouchTap={this._newNoteAction}/>
                <ListItem
                  primaryText="BOARDS"
                  initiallyOpen={true}
                  nestedItems={activityData.config.boards.map((board, idx) =>
                    <ListItem
                      value={idx}
                      primaryText={board.title}
                      onTouchTap={e => {
                        e.preventDefault();
                      }}
                    />
                  )}
                />
              </SelectableList>
              <SelectableList defaultValue={5}>
                <ListItem
                  primaryText="TAGS"
                  initiallyOpen={true}
                  nestedItems={activityData.config.classTags.map((tag, idx) =>
                    <ListItem
                      value={idx}
                      primaryText={tag.title}
                      onTouchTap={e => {
                        e.preventDefault();
                      }}
                    />
                  )}
                />
              </SelectableList>
            </Drawer>
          </div>
        <div
          className="ContentHits"
          style={{
            marginLeft,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 5,
            marginBottom: 5,
            marginRight: 5,
          }}
        >
          <NoteGrid />
          <p>{JSON.stringify(activityData.config)}</p>
          <p>{JSON.stringify(userInfo)}</p>
          <p>{activityData.config ? activityData.config.text : 'NO TEXT'}</p>
      </div>
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


