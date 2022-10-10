import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonDetails } from "../api";

export const loadPokemonDetails = createAsyncThunk(
  "pokemonDetails/loadPokemonDetails",
  async (id) => {
    const response = await getPokemonDetails(id);
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  error: null,
  pokemonInfo: {},
};

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  extraReducers: {
    [loadPokemonDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [loadPokemonDetails.fulfilled]: (state, { payload }) => {
      state.pokemonInfo = payload;
      state.isLoading = false;
    },
    [loadPokemonDetails.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default pokemonDetailsSlice.reducer;
