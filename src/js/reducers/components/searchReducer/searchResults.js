import SearchActionTypes from '../../../actionTypes/components/SearchActionTypes';

const initialState = [];

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case SearchActionTypes.LOAD_DATA_SUCCESS:
        case SearchActionTypes.SELECT_RESULT:
        case SearchActionTypes.SET_VALUE: {
            return action.results;
        }

        case SearchActionTypes.ClEAR_VALUE: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
