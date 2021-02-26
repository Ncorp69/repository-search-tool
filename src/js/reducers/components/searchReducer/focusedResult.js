import SearchActionTypes from '../../../actionTypes/components/SearchActionTypes';

const initialState = '';

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case SearchActionTypes.FOCUS_RESULT: {
            return action.value;
        }

        case SearchActionTypes.SET_VALUE:
        case SearchActionTypes.ClEAR_VALUE:
        case SearchActionTypes.BLUR_RESULT: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
