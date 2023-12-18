import reducer from "reducers";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { devToolsEnhancer } from "redux-devtools-extension";

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = function() {
  const store = createStore(
    persistedReducer,
    devToolsEnhancer({}) // This is a middleware so that means we can hook any thing.
  );

  const persistor = persistStore(store);

  return { persistor ,store };
}

export default configureStore;