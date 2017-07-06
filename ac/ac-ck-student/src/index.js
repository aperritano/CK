// @flow

import React from 'react';
import { type ActivityPackageT} from 'frog-utils';
import config from './config';
import MainLayout from './MainLayout';

const meta = {
  name: 'ac-ck-student',
  type: 'react-component'
};

const dataStructure = {};

const mergeFunction = (object, dataFn) => {};

export const ActivityRunner = ({ activityData }: ActivityRunnerT) =>
  <div>
    <h1>{activityData.config ? activityData.config.title : 'NO TITLE'}</h1>
    <p>{activityData.config ? activityData.config.text : 'NO TEXT'}</p>
  </div>;

export default ({
  id: 'ac-ck-student',
  meta,
  config,
  ActivityRunner,
  Dashboard: null,
  dataStructure,
  mergeFunction
}: ActivityPackageT);
