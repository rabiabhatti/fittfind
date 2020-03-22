import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

import rootReducer from '.';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export default ({ element }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {element}
        </PersistGate>
    </Provider>
);
