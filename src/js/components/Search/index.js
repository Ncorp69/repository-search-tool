import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SearchIcon, SpinnerIcon, CrossIcon } from '../Icons';
import SearchResults from './SearchResults';
import { loadData, onValueChange, clearValue, selectResultViaKey } from '../../actions/components/searchActions'

const Search = ({ value, loaded, loadData, onValueChange, clearValue, selectResultViaKey }) => {
    useEffect(() => {
        loadData();
    }, []);

    const [ showResults, setShowResults ] = useState( false );

    const inputRef = useRef( null );

    const clear = () => {
        clearValue();
        inputRef.current.focus();
    };

    const onFocus = () => setShowResults( true );

    const onBlur = () => setShowResults( false );

    return <div className="search-wrap">
        <SearchIcon className="search-icon"/>
        <input className="search" ref={inputRef} value={value} onChange={onValueChange}
               onKeyDown={selectResultViaKey} onFocus={onFocus} onBlur={onBlur} type="text"
               placeholder="Type anything..."/>
        { loaded ? <CrossIcon className="cross-icon" onClick={clear}/> : <SpinnerIcon className="spinner-icon"/>}
        { showResults ? <SearchResults/> : null }
    </div>;
};

const mapStateToProps = ({ searchReducer }) => ({
    value: searchReducer.searchValue,
    loaded: searchReducer.searchData.loaded
});

const mapDispatchToProps = {
    loadData,
    onValueChange,
    clearValue,
    selectResultViaKey
};

export default connect( mapStateToProps, mapDispatchToProps )( React.memo( Search ));