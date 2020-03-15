import { DRINK_BEER } from './beerTypes';

const initialState = {
    numOfBeers: 1000
}

const beerReducer = (state = initialState, action) => {
    switch(action.type) {
        case DRINK_BEER: return {
            ...state,
            numOfBeers: state.numOfBeers - 1
        }
        default: return state
    }
}

export default beerReducer;