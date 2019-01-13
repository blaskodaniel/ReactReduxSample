
const initstate = {
    loader: false,
    users: []
}

const AppReducer = (state = initstate, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case 'LOADER':
            newState.loader = action.value;
            return newState;
        case 'GET_MATCH_SUCCESS':
            newState.users = action.value;
            return newState;
        case 'GET_MATCH_ERROR':
            return newState;
        default:
            return newState
    }
    return newState;
}

export default AppReducer;