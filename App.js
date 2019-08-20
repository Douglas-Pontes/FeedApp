import * as React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import Routes from './src/routes';

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
    <Routes />
  </ApplicationProvider>
);

export default App;