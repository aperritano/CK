// @flow

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui';

// NoteGrid.propTypes = {
//   noteData: PropTypes.object.isRequired, // eslint-disable-line forbid-prop-types
// };
// const isMobile = false;
// const defaultMarginLeft = isMobile ? 100 : 200;
// const marginLeft = true ? defaultMarginLeft : 0;

export default class NoteGrid extends Component {

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
      // paddingLeft: isMobile ? 0 : 48,
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: 'white'
    };

    console.log('PROPS DATA', this.props);
    return (
      <div>
        <main id="notes" style={containerCardStyle}>
          {Object.keys(this.props.noteData).map( (key, index) =>
            <Card
              key={index}
              style={cardStyle}
            >
              <CardTitle
                title={this.props.noteData[key].noteType.prompt}
                subtitle={'Author ' + this.props.noteData[key].user.name}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'rgba(255, 255, 255, 0.6)'
                }}
                titleStyle={{ fontSize: 16 }}
              />
              <CardText>
                {this.props.noteData[key].note}
              </CardText>
            </Card>
          )}
        </main>
      </div>
    );
  }
}
