import { createSlice } from '@reduxjs/toolkit';
import {
    fetchSellNotices,
    getFavNotices
} from './operation';

const noticesInitialState = {
    items: [],
    favNotices: [],
  isLoading: false,
  error: null,
};


const noticesSlice = createSlice({
    name: 'notices',
    initialState: noticesInitialState,

    extraReducers: (builder) => {
        builder
            .addCase(
                fetchSellNotices.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = action.payload;
                }
        )
            .addCase(
                getFavNotices.fulfilled, (state, action) => {
                    console.log(action.payload);
                    state.favNotices = action.payload.reduce((acc, item) => {
                        acc.push(item._id)
                        return acc
                    }, [])
                }
            )
            .addMatcher(
                fetchSellNotices.pending, state => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                fetchSellNotices.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                    }
        )
        .addMatcher(
                getFavNotices.rejected, (state, action) => {
                    state.error = action.payload;
                    }
                )
    }
})

export const noticesReducer = noticesSlice.reducer;
