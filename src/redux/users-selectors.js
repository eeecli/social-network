export const getUsers = (state) => state.usersPage.users;

export const getPageSize = (state) => state.pagination.pageSize;

export const getUsersCount = (state) => state.usersPage.usersCount;

export const getCurrentPage = (state) => state.pagination.currentPage;

export const getIsLoading = (state) => state.usersPage.isLoading;

export const getFollowingInProgress = (state) => state.usersPage.followingInProgress;
