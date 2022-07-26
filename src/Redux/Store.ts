import {createStore} from 'redux';
import UserReducer from './reducers/UserReducer';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, UserReducer);

const Store = createStore(persistedReducer);
const persistor = persistStore(Store);

export {Store, persistor};
