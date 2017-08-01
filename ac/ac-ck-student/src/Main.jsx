import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

import NoteGrid from './NoteGrid';
import NoteDialog from './NoteDialog';

export default class Main extends Component {
  constructor(props) {
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
    console.log('newNote', this.state);
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
        backgroundColor: 'white',
        width: '100%',
      },
      flex: {
        flex: 1,
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
        <AppBar position="static" style={styles.appBar}>
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" style={styles.flex}>
              CK
            </Typography>
            <Button color="contrast">{userInfo.name}</Button>
          </Toolbar>
        </AppBar>
        <div style={styles.gridContent}>
          <NoteGrid noteData={data} />
        </div>
        <div>
          <Button fab color="accent"
                  style={styles.floatingLabelStyle}
                  onClick={() =>
                    this.setState({ open: true })}>
            <ModeEditIcon />
          </Button>
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