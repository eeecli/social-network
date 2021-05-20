import { AppStateType } from "./redux-store";

export const getUsers = (state: AppStateType) => state.usersPage.users;

export const getPageSize = (state: AppStateType) => state.pagination.pageSize;

export const getUsersCount = (state: AppStateType) => state.usersPage.usersCount;

export const getCurrentPage = (state: AppStateType) => state.pagination.currentPage;

export const getIsLoading = (state: AppStateType) => state.usersPage.isLoading;

export const getFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress;
