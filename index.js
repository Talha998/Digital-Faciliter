/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { requireNativeComponent } from 'react-native';

const RNSVDef = requireNativeComponent('rnsvdef');


AppRegistry.registerComponent(appName, () => App);
