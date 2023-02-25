export const selectNotices = (state) => state.notices.items;
export const selectFavNotices = (state) => state.notices.favNotices;
export const selectIsLoading = (state) => state.notices.isLoading;

export const getSearch = (state) => state.search;
export const getStatusFilter = (state) => state.filters.status;

export const isLoading = (state) => state.notices.isLoading;
