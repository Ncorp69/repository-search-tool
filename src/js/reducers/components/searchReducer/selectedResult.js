import SearchActionTypes from '../../../actionTypes/components/SearchActionTypes';

const initialState = '';

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case SearchActionTypes.SELECT_RESULT: {
            return action.value;
        }

        default: {
            return state;
        }
    }
}
