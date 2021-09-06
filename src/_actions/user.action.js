export default {
    setName,
    setMovieName
}

function setName(name) {
    return dispatch => {
        dispatch({
            type: 'SET_NAME',
            name
        })
    }
}

function setMovieName() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: 'SET_MOVIE_NAME',
                    data
                })
            )
            .catch(err => {
                console.log(err)
            })
    }
}