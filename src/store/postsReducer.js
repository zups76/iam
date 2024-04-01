// modules/loading.js
// Actions
const SET_LOADING = "loading/SET_LOADING";

// Action functions
export const setLoading = loadingState => ({
    type : SET_LOADING, loadingState
})

// Store State Lists
const initialState = {
    loadingState: false,
    loadingTest: "123 Loading!"
};

// Switch / Case Redux Actions
export default function loading(state = initialState, action) {

  // console.error(SET_LOADING)
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loadingState: action.loadingState
            }
        default:
            return state;
    }
}