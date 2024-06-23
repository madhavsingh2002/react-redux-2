import React from 'react';
import {View, Text} from 'react-native'
import { Provider } from 'react-redux';
import store from './store.js';
import PostList from './components/PostList.js';
import InputFields from './components/InputFields.js';
const App = () => {
  return (
    <Provider store={store}>
      <InputFields/>
      {/* <PostList/> */}
    </Provider>
  );
};

export default App;
