/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';
import reducers from './redux/reducers';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';

axios.defaults.baseURL = 'https://gasolina-native.firebaseio.com';
const sagaMiddleware = createSagaMiddleware();

AppRegistry.registerComponent(appName, () => App);
