import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const reducer = combineReducers({
  user: userReducer,
});

const rootReducer = (
  state: CombinedState<any> | undefined,
  action: AnyAction,
) => {
  return reducer(state, action);
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMidleware =>
    getDefaultMidleware({serializableCheck: false}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
