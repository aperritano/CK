import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config';
import App from '../imports/ui/App';
import injectTapEventPlugin from 'react-tap-event-plugin';


Meteor.startup(() => {
  injectTapEventPlugin();
  render(<App />, document.getElementById('render-target'));
});
