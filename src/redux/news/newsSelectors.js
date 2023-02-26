export const selectNews = state => state.news.news[0];
export const selectTotalPages = state => state.news.news?.data?.totalPages;
export const selectPage = state => state.news.news?.data?.page;
export const selectSpinnerToggle = state => state.news.isLoading;