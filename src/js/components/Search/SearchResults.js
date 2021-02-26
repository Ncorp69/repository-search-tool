import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import { searchResultMouseEnter, turnOnArrowKeys } from '../../actions/components/searchActions';

const SearchResults = ({ value, results, focusedResult, onMouseEnter, onMouseLeave }) => {
    if ( !value || value.length < 3 || results.length === 0 ) return null;
    if ( results.length === 1 && results[0] === value ) return null;

    const onMouseDown = event => event.preventDefault(); // block the dropdown from stealing focus

    return <div className="search-results-wrap animated-search-results" onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} onMouseLeave={ onMouseLeave }>
        {results.sort().map( name => <Result key={name} name={name} focused={name === focusedResult}/>)}
    </div>;
};

const mapStateToProps = ({ searchReducer }) => ({
    value: searchReducer.searchValue,
    results: searchReducer.searchResults,
    focusedResult: searchReducer.focusedResult
});

const mapDispatchToProps = {
    onMouseEnter: searchResultMouseEnter,
    onMouseLeave: turnOnArrowKeys
};

export default connect( mapStateToProps, mapDispatchToProps )( React.memo( SearchResults ));