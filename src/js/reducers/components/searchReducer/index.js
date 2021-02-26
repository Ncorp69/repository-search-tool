import { combineReducers } from 'redux';
import searchData from './searchData'
import searchResults from './searchResults'
import searchValue from './searchValue'
import selectedResult from './selectedResult';
import focusedResult from './focusedResult';
import arrowKeysState from './arrowKeysState';

export default combineReducers({
    searchData,
    searchResults,
    searchValue,
    selectedResult,
    focusedResult,
    arrowKeysState
});