// @flow

import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import GraphMenu from './GraphMenu';

import { UndoButton, ConfigMenu } from './Settings';
import ExpandButton from '../SidePanel/ExpandButton';

const styles = {
  root: {
    flexGrow: 1
  }
};

const TopPanel = ({ openExport, openImport }) => (
  <div id="topPanel">
    <Grid container justify="space-between" spacing={0}>
      <Grid item>
        <Grid container>
          <Grid item>
            <ConfigMenu {...{ openExport, openImport }} />
          </Grid>
          <Grid item>
            <GraphMenu />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <UndoButton />
          </Grid>
          <Grid item>
            <ExpandButton />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(TopPanel);
