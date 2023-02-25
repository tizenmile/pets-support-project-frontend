export const fetchUserSuccessReducer = (state, action) => {
  state.userData = action.payload;
};

export const updateUserSuccessReducer = (state, action) => {
  state.userData = action.payload;
};

export const updateUserAvatarSuccessReducer = (state, action) => {
  state.userData = {
    ...state.userData,
    avatarURL: action.payload,
  };
};
export const pendingReducer = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

export const fulfilledReducer = (state) => {
  state.isLoading = false;
  state.error = null;
};
