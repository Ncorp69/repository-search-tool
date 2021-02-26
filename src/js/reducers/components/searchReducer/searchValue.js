import SearchActionTypes from '../../../actionTypes/components/SearchActionTypes';

const initialState = '';

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case SearchActionTypes.SELECT_RESULT:
        case SearchActionTypes.SET_VALUE: {
            return action.value;
        }

        case SearchActionTypes.ClEAR_VALUE: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
