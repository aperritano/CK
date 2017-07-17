import React, { Component, PropTypes } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  RaisedButton
} from 'material-ui';
import testData from './test_data';

// const isMobile = false;
// const defaultMarginLeft = isMobile ? 100 : 200;
// const marginLeft = true ? defaultMarginLeft : 0;

export default class NoteGrid extends Component {
  constructor(props) {
    super(props);
    Object.keys(this.props.data).forEach(key => {
      console.log(key, this.props.data[key]);
    });
  }
  render() {
    const cardStyle = {
        width: 270,
        height: 250,
        marginBottom: 10,
        marginLeft: 10,
        position: 'relative',
        backgroundColor: 'white'
      };
    const containerCardStyle = {
      marginLeft: 0,
      //paddingLeft: isMobile ? 0 : 48,
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: 'white'
    };
    const imageHolderStyle = {
      textAlign: 'center',
    };


    return (
      <div>
        <main id="notes" style={containerCardStyle}>
          { Object.keys(this.props.data).map((key, index) =>
            <Card key={index} style={cardStyle}>
              <CardHeader
                subtitle={this.props.data[key].note.noteType.noteType}
              />
              <CardTitle
                title={this.props.data[key].note.noteText}
                subtitle={'by' + this.props.data[key].user.name}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'rgba(255, 255, 255, 0.6)',
                }}
                titleStyle={{ fontSize: 16 }}
              />
            </Card>
          )}
        </main>
      </div>
    );
  }
}


