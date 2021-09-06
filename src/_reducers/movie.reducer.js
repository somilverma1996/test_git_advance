const initialState = {
    name: "",
    movieList: [],
    posts: []
}

export default function movie(state = initialState, action) {
    switch (action.type) {
        // case 'SET_MOVIE_NAME':
        //     state.movieList = action.data
        //     return state
            case 'GET_ALL_POSTS':
                state.posts = action.data
                return state
        default:
            return state
    }
}