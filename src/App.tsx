import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ThemeProvider} from '@styled';
import {defaultTheme} from '@theme';
import {store, persistor} from '@store/index';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <ReduxProvider {...{store}}>
      <PersistGate {...{persistor}}>
        <ThemeProvider theme={defaultTheme}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};
export default App;
