import SearchActionTypes from '../../../actionTypes/components/SearchActionTypes';

const initialState = {
    loaded: false,
    nameList: [],
    repoMap: {}
};

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case SearchActionTypes.LOAD_DATA_SUCCESS: {
            return {
                loaded: true,
                nameList: action.nameList,
                repoMap: action.repoMap,
            };
        }

        case SearchActionTypes.LOAD_DATA_ERROR: {
            return {
                ...state,
                loaded: true
            };
        }

        default: {
            return state;
        }
    }
}
