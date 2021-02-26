import SearchActionTypes from '../../../actionTypes/components/SearchActionTypes';

const initialState = true;

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case SearchActionTypes.TURN_ON_ARROW_KEYS: {
            return true;
        }

        case SearchActionTypes.TURN_OFF_ARROW_KEYS: {
            return false;
        }

        default: {
            return state;
        }
    }
}
