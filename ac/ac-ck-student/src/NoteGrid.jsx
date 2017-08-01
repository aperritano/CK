// @flow

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

// NoteGrid.propTypes = {
//   noteData: PropTypes.object.isRequired, // eslint-disable-line forbid-prop-types
// };
// const isMobile = false;
// const defaultMarginLeft = isMobile ? 100 : 200;
// const marginLeft = true ? defaultMarginLeft : 0;
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
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
            <Card key={index}
                   style={cardStyle}>
              <CardContent>
                <Typography type="headline" component="h2">
                  {this.props.noteData[key].noteType.noteType.toUpperCase() + ' NOTE'}
                </Typography>
                <Typography type="body1" >
                  {this.props.noteData[key].noteType.prompt}
                </Typography>
                <Typography type="body1" >
                  {this.props.noteData[key].note}
                </Typography>
                <br/>
                <Typography type="body1" >
                  {this.props.noteData[key].userTags === undefined ? 'No tags' : 'Tags ' + JSON.stringify(this.props.noteData[key].userTags.map((value, index) => value))}
                </Typography>
                <br/>
                <Typography type="body1" >
                  {'Author ' + this.props.noteData[key].user.name}
                </Typography>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    );
  }
}
