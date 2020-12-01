import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contacts from './reducer/contacts';
import authReducer from './reducer/authReducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const defaultMiddleware = getDefaultMiddleware({ serializableCheck: false });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: {
    contacts,
    auth: persistReducer(authPersistConfig, authReducer)
  },
  middleware: [...defaultMiddleware, logger, thunk]
})

export default store;

export const persistor = persistStore(store);
