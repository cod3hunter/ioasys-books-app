import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ThemeProvider} from '@styled';
import {defaultTheme} from '@theme';
import {store} from '@store/index';
import {Provider as ReduxProvider} from 'react-redux';

const App: React.FC = () => {
  return (
    <ReduxProvider {...{store}}>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </ReduxProvider>
  );
};
export default App;
