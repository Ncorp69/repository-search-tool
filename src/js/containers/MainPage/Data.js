import React from 'react';
import { connect } from 'react-redux';
import Panel from '../../components/Panel';

const Data = ({ selectedRepo, repoMap }) => {
    if ( !selectedRepo || !repoMap[ selectedRepo ] ) return <Panel className="data">
        No data to display
    </Panel>;

    const repo = repoMap[ selectedRepo ];

    return <Panel className="data">
        <div>
            <h3>{repo.name || '-'}</h3>
        </div>
        <div>
            <span className="label">Id:</span>
            <span className="text">{repo.id || '-'}</span>
        </div>
        <div>
            <span className="label">Url:</span>
            <span className="text"><a href={repo.html_url} target="_blank">{repo.html_url}</a></span>
        </div>
        <div>
            <span className="label">Description:</span>
            <span className="text">{repo.description || '-'}</span>
        </div>
    </Panel>
}

const mapStateToProps = ({ searchReducer }) => ({
    selectedRepo: searchReducer.selectedResult,
    repoMap: searchReducer.searchData.repoMap
});

export default connect( mapStateToProps )( Data );