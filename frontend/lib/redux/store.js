import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import toastReducer from './slices/toastSlice';
import  filterSearchReducer from "./slices/filterSearchSlice"

const isClient = typeof window !== 'undefined';

// Use localStorage if on client, else mock storage
const storage = isClient 
  ? require('redux-persist/lib/storage').default 
  : {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(),
      removeItem: () => Promise.resolve(),
    };

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['user', 'isAuthenticated']
  };
  
 
  const themePersistConfig = {
    key: 'theme',
    storage
  };

  const filterSearchPersistConfig = {
    key: 'filterSearch',
    storage,
    whitelist: ['keyword', 'currentPage']
  };

  

export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      theme: persistReducer(themePersistConfig, themeReducer),
      toast: toastReducer,
      filterSearch: persistReducer(filterSearchPersistConfig, filterSearchReducer)
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
  });
  
  export const persistor = persistStore(store);




