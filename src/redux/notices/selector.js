export const selectNotices = (state) => state.notices.items;
export const selectFavNotices = (state) => state.notices.favNotices;
export const selectIsLoading = (state) => state.notices.isLoading;
export const selectPage = (state) => state.notices.page;
export const selectTotal = (state) => state.notices.total;

export const getSearch = (state) => state.search;
export const getStatusFilter = (state) => state.filters.status;

export const isLoading = (state) => state.notices.isLoading;
