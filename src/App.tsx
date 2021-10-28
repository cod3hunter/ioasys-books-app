import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ThemeProvider} from './styled-components';
import {defaultTheme} from './Theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
