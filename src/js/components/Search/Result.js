import React from 'react';
import { connect } from 'react-redux';
import { RepoIcon } from '../Icons';
import { selectResult, turnOnArrowKeys } from '../../actions/components/searchActions';

const Result = ({ name, selectResult, turnOnArrowKeys, focused }) => {
    const onClick = () => {
        selectResult( name );
        turnOnArrowKeys();
    }

    return <div className={`search-result ${focused ? 'selected-search-result' : ''}`} onClick={onClick}>
        <RepoIcon className="repo-icon"/>{name}
    </div>;
};

const mapDispatchToProps = {
    selectResult,
    turnOnArrowKeys
};

export default connect( null, mapDispatchToProps )( Result )