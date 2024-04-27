/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Text, TextInput } from 'react-native'
import Colors from './src/constants/Colors';
AppRegistry.registerComponent(appName, () => App);

if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    Text.defaultProps.color = Colors.WHITE
}

if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
    TextInput.defaultProps.color = Colors.WHITE
    TextInput.defaultProps.placeholderTextColor = Colors.GRAY_186
}
