import SearchActionTypes from "../../actionTypes/components/SearchActionTypes";

const getResults = ( nameList, value ) => nameList.filter( name => name.includes( value ));

export const loadData = () => ( dispatch, getState ) => {
    fetch( 'https://api.github.com/orgs/kraftvaerk/repos' )
        .then( resp => resp.json())
        .then( resp => {
            let nameList = [];
            const repoMap = {};
            const { searchValue } = getState().searchReducer;

            if ( resp && resp instanceof Array ) {
                resp.forEach( repo => {
                    const { name } = repo;

                    nameList.push( name );
                    repoMap[ name ] = repo;
                });
            }

            nameList = nameList.sort();

            dispatch({
                type: SearchActionTypes.LOAD_DATA_SUCCESS,
                nameList,
                repoMap,
                results: searchValue ? getResults( nameList, searchValue ) : []
            });
        }, error => {
            alert(`load repoData error!\n${error.toString()}`);

            dispatch({
                type: SearchActionTypes.LOAD_DATA_ERROR
            });
        })
};

export const onValueChange = event => ( dispatch, getState ) => {
    const { value } = event.target;
    const { nameList } = getState().searchReducer.searchData;

    const results = getResults( nameList, value )

    dispatch({
        type: SearchActionTypes.SET_VALUE,
        value,
        results
    });
};

export const clearValue = () => ({
    type: SearchActionTypes.ClEAR_VALUE,
});

export const selectResultViaKey = event => ( dispatch, getState ) => {
    const { focusedResult, searchResults, arrowKeysState } = getState().searchReducer;

    if ( !arrowKeysState || !searchResults || searchResults.length === 0 ) return;

    if ( event.code === 'ArrowDown' || event.code === 'ArrowUp' ) {
        event.preventDefault();

        const { length } = searchResults;
        let value;

        if ( !focusedResult ) {
            value = event.code === 'ArrowDown' ? searchResults[0] :  searchResults[length - 1];
        } else {
            const currResNum = searchResults.indexOf( focusedResult )

            let nextRes = event.code === 'ArrowDown' ? currResNum + 1 : currResNum - 1;
            nextRes = nextRes >= 0 ? ( nextRes % length ) : ( nextRes + length );

            value = searchResults[ nextRes ]
        }

        return dispatch({
            type: SearchActionTypes.FOCUS_RESULT,
            value
        })
    }

    if ( event.code === 'Enter' ) return dispatch( selectResult( focusedResult ));
};

export const blurResult = () => ({
    type: SearchActionTypes.BLUR_RESULT
});

export const searchResultMouseEnter = () => ( dispatch, getState ) => {
    dispatch( blurResult());
    dispatch({ type: SearchActionTypes.TURN_OFF_ARROW_KEYS });
};

export const turnOnArrowKeys = () => ({ type: SearchActionTypes.TURN_ON_ARROW_KEYS });

export const selectResult = value => ({
    type: SearchActionTypes.SELECT_RESULT,
    value,
    results: [ value ]
});
