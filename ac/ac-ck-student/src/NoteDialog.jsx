// @flow

import { uuid } from 'frog-utils';
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import * as Colors from 'material-ui/styles/colors';
// import update from 'immutability-helper';
const SelectableList = makeSelectable(List);

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class NoteDialog extends Component {
  constructor(props) {
    super(props);

    const { activityData } = this.props;
    const { config } = activityData;
    const { noteTypes, classTags } = config;

    console.log('note types', config);

    this.state = {
      selectedValue: 1,
      userText: noteTypes[0].sentenceStarter !== undefined ?  noteTypes[0].sentenceStarter : '',
      userNoteType: noteTypes[0],
    };

    // console.log('props', this.props, noteTypes, classTags );
    // const noteTypes = activityData.config.noteTypes;
    // const classTags = activityData.config.classTags;
    //


    this._onHandleRequestClose = this._onHandleRequestClose.bind(this);
    this._onHandleRequestSubmit = this._onHandleRequestSubmit.bind(this);
    this._onHandleRequestNoteTypeChange = this._onHandleRequestNoteTypeChange.bind(this);
    this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
  }

  _onHandleRequestNoteTypeChange(event, value) {
    const { activityData } = this.props;
    const { config } = activityData;
    const { noteTypes } = config;

    console.log('new selected', noteTypes[value-1]);
    this.setState({
      selectedValue: value,
      userText: noteTypes[value-1].sentenceStarter !== undefined ?  noteTypes[value-1].sentenceStarter : '',
    });
  }

  _handleTextFieldChange(event, value) {
    const { activityData } = this.props;
    const { config } = activityData;
    const { noteTypes } = config;

    this.setState({
      selectedValue: this.state.selectedValue,
      userText: value,
      userNoteType: noteTypes[this.state.selectedValue-1],
    });

    // console.log('new text state', this.state);
  }
  _onHandleRequestClose() {
    if (this.props.onHandleRequestClose) {
      this.props.onHandleRequestClose();
    }
  }
  _onHandleRequestSubmit() {
    // console.log('we are submitting', this.props);
    // console.log('datafn boject', this.props.dataFn);
    const n = { note: this.state.userText, noteType: this.state.userNoteType, user: this.props.userInfo };
    this.props.dataFn.objInsert(n, uuid());
    console.log('DATA', this.props.data);

    if (this.props.onHandleRequestClose) {
      this.props.onHandleRequestClose();
    }
  }
  render() {

    // console.log('note types', this.props, noteTypes, activityData, 'state', this.state);

    const actions = [
      <FlatButton
        key="submit"
        label="SUBMIT"
        onTouchTap={this._onHandleRequestSubmit}
      />,
      <FlatButton
        key="close"
        label="CLOSE"
        onTouchTap={this._onHandleRequestClose}
      />
    ];
    const containerCardStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: 'white'
    };
    const basicContainerStyle = {
      paddingLeft: 16
    };
    const fieldsContainerStyle = {
      ...basicContainerStyle,
      width: 250
    };
    const tagListStyle = {
      paddingTop: 16,
      paddingRight: 1,
      paddingBottom: 1,
      paddingLeft: 43,
      marginBottom: 5
    };

    const { open, activityData } = this.props;
    const { noteTypes, classTags } = activityData.config;

    let tagItems = [];
    if (classTags !== undefined) {
      tagItems = classTags.map(tag =>
        <ListItem
          key={tag.id}
          style={tagListStyle}
          leftCheckbox={<Checkbox />}
          primaryText={tag.title}
        />
      );
    }

    let noteItems = [];
    if (noteTypes !== undefined) {
      noteItems = noteTypes.map( (noteType, index) =>
        <ListItem key={index} value={index + 1} primaryText={noteType.noteType}/>
      );
    }

    return (
      <div>
        <Dialog
          title="Create New Note"
          actions={actions}
          modal
          //  contentStyle={customContentStyle}
          //  bodyStyle={bodyStyle}
          // titleStyle={titleStyle}
          open={open}
          onRequestClose={this._onHandleRequestClose}
        >

          <main id="notes" style={containerCardStyle}>

            <div>
              <SelectableList
                defaultValue={1}
                value={this.state.selectedValue}
                onChange={this._onHandleRequestNoteTypeChange}
              >
                <Subheader>NOTE TYPES</Subheader>
                {noteItems !== undefined
                  ? noteItems
                  : <ListItem value={1} primaryText="no notes" />}
              </SelectableList>
            </div>
            <div>
              <Subheader>
                {noteTypes === undefined ? 'No Selected Note' : (noteTypes[this.state.selectedValue-1].noteType.toUpperCase())}
              </Subheader>
              <div style={fieldsContainerStyle}>
                {noteTypes === undefined ? 'No Prompt' : (noteTypes[this.state.selectedValue-1].prompt)}
              </div>
              <div style={fieldsContainerStyle}>
                <TextField
                  hintText="Note content"
                  multiLine
                  fullWidth
                  rows={8}
                  textareaStyle={{ backgroundColor: Colors.grey50 }}
                  value={this.state.userText}
                  onChange={this._handleTextFieldChange}
                />
              </div>
            </div>
            <div>
              <Subheader>TAGS</Subheader>
              <div style={basicContainerStyle}>Select one or more tags.</div>
              <List>
                {tagItems !== undefined
                  ? tagItems
                  : <ListItem value={1} primaryText="No Tags" />}
              </List>
            </div>
          </main>
        </Dialog>
      </div>
    );
  }
}