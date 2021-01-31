const SET_CURRENT_PAGE = 'social-network/paginator-reduser/SET-CURRENT-PAGE';

const initialState = {
  pageSize: 10,
  currentPage: 1,
};
const paginationReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export default paginationReduser;
