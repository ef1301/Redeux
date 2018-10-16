// Here, we will import all of our individual sagas and then organize them into a single root saga;
import { combineEpics } from 'redux-observable';

// Individual epics;
import fetchPlayerEpic from './fetchPlayerEpic';
import removePlayerEpic from './removePlayerEpic';

// Root epic;
const rootEpic = combineEpics(
  fetchPlayerEpic,
  removePlayerEpic
);

// We then export the collective root saga to be ran elsewhere and used as middleware in our Redux store;
export default rootEpic;
