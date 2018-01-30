import { createStore, compose } from 'redux';

import reducer from './reducers';
export default createStore(reducer, undefined, 
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f

));
