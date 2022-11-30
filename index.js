/**
 * @format
 */

import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';

import { AppChallenge } from './AppChallenge';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppChallenge);
