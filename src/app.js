import React from 'react';
import { Provider } from 'react-redux';

import './style/base';
import Main from './container/Main';
import WheelContainer from './container/WheelContainer';
import Settings from './components/Settings';
import EditUI from './container/EditUI';
import store from './store';

class App extends React.Component {
  render = () => (
    <Provider store={store}>
      <Main>
        <EditUI />
        <Settings />
        <WheelContainer />
      </Main>
    </Provider>
  );
}

export default App;
