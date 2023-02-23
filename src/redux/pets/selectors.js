export const selectPets = (state) => state.pets;

export const selectIsLoading = (state) => state.pets.isLoading;

export const selectError = (state) => state.pets.error;

export const selectIsDeleting = (state) => state.pets.isDeleting;

export const selectIsAdding = (state) => state.pets.isAdding;
