import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tag from './tag';

import './tagscloud.css';

export default class TagsCLoud extends Component {

    static propTypes = {
        data: PropTypes.array,
        history: PropTypes.object.isRequired
    };
    static defaultProps = {
        data: []
    };

    render() {
        return (
            <div
                className="tagscloud"
            >
                {this.props.data.map((tag, index) => <Tag key={index} tag={tag} {...this.props}/> )}
            </div>
        )
    };

}
