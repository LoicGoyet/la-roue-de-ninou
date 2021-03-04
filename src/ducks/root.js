import { combineReducers } from 'redux';

import setups from './setups';
import ui from './ui';

export const SET_STATE = 'home-helper/root/SET_STATE';

const appReducer = combineReducers({ setups, ui });

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_STATE: {
      return action.data;
    }

    default: {
      return appReducer(state, action);
    }
  }
};

export const setState = data => ({
  type: SET_STATE,
  data,
});

export function* rootStateSaga() {}

export default rootReducer;
