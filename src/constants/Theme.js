import { StyleSheet, useColorScheme } from "react-native";
import { DefaultTheme } from '@react-navigation/native';



const theme = useColorScheme();
const isDarkTheme = theme === 'dark';

const sytemTheme = {
    ...DefaultTheme,
}
