import React, { Component, PropTypes } from 'react';
import update from 'immutability-helper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem,makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);
// function wrapState(ComposedComponent) {
//   return class SelectableList extends Component {
//     static propTypes = {
//       children: PropTypes.node.isRequired,
//       defaultValue: PropTypes.number.isRequired,
//     };
//
//     componentWillMount() {
//       this.setState({
//         selectedIndex: this.props.defaultValue,
//       });
//     }
//
//     handleRequestChange = (event, index) => {
//       this.setState({
//         selectedIndex: index,
//       });
//     };
//
//     render() {
//       return (
//         <ComposedComponent
//           value={this.state.selectedIndex}
//           onChange={this.handleRequestChange}
//         >
//           {this.props.children}
//         </ComposedComponent>
//       );
//     }
//   };
// }
//
// SelectableList = wrapState(SelectableList);


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class NoteDialog extends Component {

  constructor(props) {
    super(props);
    const {activityData} = this.props;
    console.log('act types', this.props);
    const noteTypes = activityData.config.noteTypes;
    console.log('note types', noteTypes);

    const items = noteTypes.map((type, index) =>
      <ListItem
        value={index+1}
        primaryText={type.noteType}
      />
    );



    console.log('items', items);
    this.state = {
      selectedValue: 1,
      selectedNoteType:  noteTypes[0],
      types: noteTypes,
      newNote: {
        noteType: noteTypes[0],
        noteText: noteTypes[0].sentenceStarter,
        author: this.props.userInfo
      },
      menuItems: items
    };




    this._onHandleRequestClose = this._onHandleRequestClose.bind(this);

    this._onHandleRequestNoteTypeChange = this._onHandleRequestNoteTypeChange.bind(this);
    this._handleTextFieldChange = this._handleTextFieldChange.bind(this);

  }

  static get propTypes() {
    return {
      open: PropTypes.bool,
      onHandleRequestClose: PropTypes.func,
    };
  }

  _onHandleRequestNoteTypeChange(event, value) {
    console.log('value',value);

    console.log('state BEFORE',this.state);

    const nt = this.state.types[value-1];
    this.setState({
      selectedValue: value,
      selectedNoteType: nt,
      newNote: {
        noteType: nt,
        noteText: nt.sentenceStarter,
        author: this.props.userInfo
      }
    });


    console.log('state notetype',this.state);

  }
  _handleTextFieldChange(event){
    const newText = event.target.value;
    this.setState({
      newNote: {
        noteType: this.state.selectedNoteType,
        noteText: newText,
        author: this.props.userInfo
      },
    });
    console.log('new text state', this.state);
  }
  _onHandleRequestClose() {
    console.log('we are closing');
    if (this.props.onHandleRequestClose) {
      this.props.onHandleRequestClose();
    }
  }
  render() {
    const { open } = this.props;

    const actions = [
      <FlatButton key='submit'
                  label='SUBMIT'
                  onTouchTap={this._onHandleRequestSubmit} />,
      <FlatButton key='close'
                  label='CLOSE'
                  onTouchTap={this._onHandleRequestClose} />,
    ];
    const containerCardStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: 'white'
    };
    const fieldsContainerStyle = {
      paddingLeft: 16
    };

    return (
      <div>
        <Dialog
          title='Create New Note'
          actions={actions}
          modal={true}
        //  contentStyle={customContentStyle}
        //  bodyStyle={bodyStyle}
         // titleStyle={titleStyle}
          open={open}
          onRequestClose={this._onHandleRequestClose}>

          <main id="notes" style={containerCardStyle}>

          <div>
            <SelectableList defaultValue={1} value={this.state.selectedValue} onChange={this._onHandleRequestNoteTypeChange}>
              <Subheader>NOTE TYPES</Subheader>
              {this.state.menuItems}
            </SelectableList>
          </div>
          <div>
            <Subheader>{this.state.selectedNoteType.noteType.toUpperCase() + " NOTE"}</Subheader>
            <div style={fieldsContainerStyle}>{this.state.selectedNoteType.prompt}</div>
            <div style={fieldsContainerStyle}>
              <TextField
                style={fieldsContainerStyle}
                hintText="Note content"
                multiLine={true}
                fullWidth={true}
                rows={8}
                value={this.state.newNote.noteText}
                onChange={this._handleTextFieldChange}
              />
            </div>
          </div>
          </main>
        </Dialog>
      </div>
    );
  }
}