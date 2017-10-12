import { Navigation } from 'react-native-navigation';
import screen1 from './src/screens/screen1';
import Subs from './src/screens/Subs';


export function registerApp() {
	Navigation.registerComponent('TestProject.screen1', () => screen1);
	Navigation.registerComponent('TestProject.screen2', () => screen2);
}