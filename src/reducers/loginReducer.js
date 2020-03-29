const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN' :
            return {
                ...state,
                resp: action.payload.data
            }

        default:
            return state;
    }
}