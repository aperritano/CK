import React, { Component, PropTypes } from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IndexStyles from './index.css';




const notePanelStyles = {
  mainDiv: {
    width: '100% !important'
  }
};

class NotePanel extends Component {

  static get propTypes() {
    return {
      noteTypes: PropTypes.object,
      onHandleRequestClose: PropTypes.func
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: false,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false
    };

    this._onHandleRequestClose = this._onHandleRequestClose.bind(this);

  }
  _onHandleRequestClose() {
    if (this.props.onHandleRequestClose) {
      this.props.onHandleRequestClose();
    }
  }

  render() {
    const { noteTypes, ...props } = this.props;

    return (<div></div>
    );
  }
}

export default NotePanel;