import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config';
import App from '../imports/ui/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941


Meteor.startup(() => {
  injectTapEventPlugin();
  render(<App />, document.getElementById('render-target'));
});
