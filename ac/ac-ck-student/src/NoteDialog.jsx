import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class NoteDialog extends Component {

  static get propTypes() {
    return {
      open: PropTypes.bool,
      onHandleRequestClose: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);
    this._onHandleRequestClose = this._onHandleRequestClose.bind(this);
  }


  _onHandleRequestClose() {
    console.log('we are closing');
    if (this.props.onHandleRequestClose) {
      this.props.onHandleRequestClose();
    }
  }

  render() {
    const { onHandleRequestClose, open, ...props } = this.props;

    const actions = [
      <FlatButton key='close'
                  label='Close'
                  onTouchTap={this._onHandleRequestClose} />,
    ];

    const customContentStyle = {
      width: '100%',
      maxWidth: 'none'
    };

    const bodyStyle = {
      padding: '0px',
    };

    const titleStyle = {
      padding: '0px',
    };


    return (
      <div>
        <Dialog
          title='CREATE A NEW NOTE'
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          bodyStyle={bodyStyle}
          titleStyle={titleStyle}
          open={open}
          onRequestClose={this._onHandleRequestClose}>
          <div>HELLLLLO</div>
        </Dialog>
      </div>
    );
  }
}