import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { AppBar, FlatButton, FloatingActionButton } from 'material-ui';
import NoteGrid from './NoteGrid';
import NoteDialog from './NoteDialog';

export default class Main extends Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);
    this.state = {
      open: false,
      anchorEL: {}
    };
    this._onHandleRequestClose = this._onHandleRequestClose.bind(this);
    this._newNoteAction = this._newNoteAction.bind(this);
    this._drawerAction = this._newNoteAction.bind(this);
  }
  _onHandleRequestClose() {
    // console.log('CLoser');
    this.setState({
      open: false
    });
  }
  _drawerAction() {
    this.setState({ drawer: !this.state.drawer });
  }
  _newNoteAction() {
    this.setState({
      open: true
    });
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
        zIndex: 2000
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
        marginTop: 55
      }
    };
    const { data, dataFn, activityData } = this.props;        // eslint-disable-line no-unused-vars
    const { config } = this.props.activityData; // eslint-disable-line no-unused-vars
    const { userInfo } = this.props;
    return (
      <div style={styles.uber}>
        <AppBar
          style={styles.appBar}
          title="CK"
          // title={activityData.config ? activityData.config.brainstormTitle : 'NO TITLE'}
          // onLeftIconButtonTouchTap={this.drawerAction}
          iconElementRight={<FlatButton label={userInfo.name} />}
        />
        <div style={styles.gridContent}>
          <NoteGrid noteData={data} />
        </div>
        <div>
          <FloatingActionButton
            style={styles.floatingLabelStyle}
            onTouchTap={this._newNoteAction}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <NoteDialog
          open={this.state.open}
          onHandleRequestClose={this._onHandleRequestClose}
          { ...{ activityData, data, dataFn, userInfo }}
        />
      </div>
    );
  }
}