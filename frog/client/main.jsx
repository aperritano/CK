import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config';
import App from '../imports/ui/App';

Meteor.startup(() => {
  injectTapEventPlugin(); // eslint-disable-line react/prefer-stateless-function
  render(<App />, document.getElementById('render-target'));
});
