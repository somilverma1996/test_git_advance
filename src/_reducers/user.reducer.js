const initialState = {
    name: ""
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'SET_NAME':
            console.log(action)
            return { name: action.name };
        default:
            return state
    }
}