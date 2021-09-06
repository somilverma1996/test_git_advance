export default {
    getAllPost
}

function getAllPost() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: 'GET_ALL_POSTS',
                    data
                })
            )
            .catch(err => {
                console.log(err)
            })
    }
}