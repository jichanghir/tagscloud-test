import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TagsCloud from './components/tagscloud';
import TagInfo from './components/taginfo';

import data from './config/daja.json';
import './app.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            selectedTag: null,
            selectedTagId: null
        }
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    static getDerivedStateFromProps(props, state) {
        if (props.match.params.itemId === state.selectedTagId) {
            return state;
        }
        else {
            return {
                selectedTagId: props.match.params.itemId,
                selectedTag: data.find((tag) => tag.id === props.match.params.itemId)
            }
        }
    }

    render() {
        return (
            <div className="app">
                <TagsCloud data={data} {...this.props}/>
                {this.state.selectedTag && <TagInfo tag={this.state.selectedTag}/>}
            </div>
        );
    }
}

export default App;
