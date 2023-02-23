import { createSlice } from "@reduxjs/toolkit";
import { fetchPets, deletePet, addNewPet } from "./operations";

const petsInitialState = {
  pets: [],
  isLoading: false,
  isDeleting: false,
  isAdding: false,
  error: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// add pet handlers
const handleAddNewPetPending = (state) => {
  state.isAdding = true;
};

const handleAddNewPetSuccess = (state, { payload }) => {
  state.isAdding = false;
  state.error = null;
  state.pets.unshift(payload);
};

const handleAddNewPetRejected = (state, { payload }) => {
  state.isAdding = false;
};

// delete pet handlers
const handleDeletePetPending = (state) => {
  state.isDeleting = true;
};

const handleDeletePetSuccess = (state, { payload }) => {
  state.isDeleting = false;
  state.error = null;
  state.pets = [...state.pets].filter((pet) => pet._id !== payload);
};

const handleDeletePetRejected = (state, { payload }) => {
  state.isDeleting = false;
};

const petsSlice = createSlice({
  name: "pets",
  initialState: petsInitialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchPets.pending, handlePending)
      .addCase(fetchPets.rejected, handleRejected)
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pets = action.payload.data.pets;
      })

      //addNewPet
      .addCase(addNewPet.pending, handleAddNewPetPending)
      .addCase(addNewPet.fulfilled, handleAddNewPetSuccess)
      .addCase(addNewPet.rejected, handleAddNewPetRejected)

      //deletePet
      .addCase(deletePet.pending, handleDeletePetPending)
      .addCase(deletePet.fulfilled, handleDeletePetSuccess)
      .addCase(deletePet.rejected, handleDeletePetRejected),
});

export const petsReducer = petsSlice.reducer;
