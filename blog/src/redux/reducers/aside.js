import { ASIDE_TRUE,ASIDE_FALSE } from '../actions/actionTypes';

const reducer = (state = false, action) => {
    switch (action.type) {
        case ASIDE_TRUE:
            return state=true;
        case ASIDE_FALSE:
            return state=false;
        default:
            return state
    }
}

export default reducer;