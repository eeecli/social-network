const SET_CURRENT_PAGE = 'social-network/paginator-reduser/SET-CURRENT-PAGE';

export type InitialState = {
  pageSize: number
  currentPage: number
}

const initialState = {
  pageSize: 10,
  currentPage: 1,
};

const paginationReduser = (state = initialState, action: any): InitialState => {
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

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export default paginationReduser;
