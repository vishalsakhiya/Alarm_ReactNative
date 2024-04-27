import { persistStore, persistReducer } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Cofige saga middleware
const sagaMiddleware = createSagaMiddleware();
// configer store with persiste reducer and arry of middleware
let store = configureStore({ reducer: persistedReducer, middleware: [sagaMiddleware] });
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
