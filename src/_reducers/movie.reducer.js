const initialState = {
    name: "",
    movieList: []
}

export default function movie(state = initialState, action) {
    switch (action.type) {
        case 'SET_MOVIE_NAME':
            state.movieList = action.data
            return state
        default:
            return state
    }
}