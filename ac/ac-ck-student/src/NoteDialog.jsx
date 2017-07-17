import React, { Component, PropTypes } from 'react';
import {  uuid } from 'frog-utils';

import update from 'immutability-helper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem,makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import * as Colors from 'material-ui/styles/colors';

let SelectableList = makeSelectable(List);

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class NoteDialog extends Component {

  constructor(props) {
    super(props);
    const {activityData} = props;
    console.log('act types', props);
    const noteTypes = activityData.config.noteTypes;
    const classTags = activityData.config.classTags;
    console.log('note types', noteTypes);

    const items = noteTypes.map((type, index) =>
      <ListItem
        value={index+1}
        primaryText={type.noteType}
      />
    );

    const tagListStyle = {
      paddingTop: 16,
      paddingRight: 1,
      paddingBottom: 1,
      paddingLeft: 43,
      marginBottom: 5
    };

    const tagsItems = classTags.map((tag, index) =>
      <ListItem
        style={tagListStyle}
        leftCheckbox={<Checkbox />}
        primaryText={tag.title}
      />
    );

    console.log('items', items);
    this.state = {
      selectedValue: 1,
      selectedNoteType:  noteTypes[0],
      types: noteTypes,
      tagItems: tagsItems,
      newNote: {
        noteType: noteTypes[0],
        noteText: noteTypes[0].sentenceStarter,
        author: this.props.userInfo,
        tags: []
      },
      menuItems: items
    };

    this._onHandleRequestClose = this._onHandleRequestClose.bind(this);
    this._onHandleRequestSubmit = this._onHandleRequestSubmit.bind(this);
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
    // console.log('value',value);
    // console.log('state BEFORE',this.state);

    const nt = this.state.types[value-1];
    this.setState({
      selectedValue: value,
      selectedNoteType: nt,
      newNote: {
        noteType: nt,
        noteText: nt.sentenceStarter,
        author: this.props.userInfo,
        tags: []
      }
    });
    // console.log('state notetype',this.state);
  }
  _handleTextFieldChange(event){
    const newText = event.target.value;
    this.setState({
      newNote: {
        noteType: this.state.selectedNoteType,
        noteText: newText,
        author: this.props.userInfo,
        tags: []
      },
    });
    // console.log('new text state', this.state);
  }
  _onHandleRequestClose() {
    if (this.props.onHandleRequestClose) {
      this.props.onHandleRequestClose();
    }
  }
  _onHandleRequestSubmit() {
    console.log('we are submitting', this.props);

    console.log('datafn boject', this.props.dataFn);
    const n = { note: this.state.newNote, user: this.props.userInfo}
    this.props.dataFn.objInsert(n, uuid() );

    console.log('DATA', this.props.data);

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
    const basicContainerStyle = {
      paddingLeft: 16,
    };
    const fieldsContainerStyle = {
      ...basicContainerStyle,
      width: 250,
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
                hintText="Note content"
                multiLine={true}
                fullWidth={true}
                rows={8}
                textareaStyle={{ backgroundColor: Colors.grey50}}
                value={this.state.newNote.noteText}
                onChange={this._handleTextFieldChange}
              />
            </div>
          </div>
            <div>
              <Subheader>TAGS</Subheader>
              <div style={basicContainerStyle}>Select one or more tags.</div>
              <List>
                {this.state.tagItems}
              </List>
            </div>
          </main>
        </Dialog>
      </div>
    );
  }
}