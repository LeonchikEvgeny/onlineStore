import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/SignIn/reducers/index";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import pokemonsSlice from "../pages/Pokemons/reducers/index";
import pokemonDetailsReducer from "../pages/PokemonDetails/reducers/index";

const reducers = combineReducers({
  auth: authReducer,
  pokemons: pokemonsSlice,
  pokemonDetails: pokemonDetailsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["pokemonDetails"],
};

const persistedConfig = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedConfig,
  pokemons: pokemonsSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST"],
      },
    }),
});
