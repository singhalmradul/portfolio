import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import themeReducer from './theme/theme.slice';
import rootSaga from './root.saga';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Disable thunk since we're using saga
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(sagaMiddleware),
  devTools: import.meta.env.DEV,
});

// Run saga middleware
sagaMiddleware.run(rootSaga);

// Export types
export type RootState = ReturnType<typeof store.getState>;

export default store;
