import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './tag.css';

export default class Tag extends Component {

    static propTypes = {
        tag: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    getColor = (tag) => {
        let r = tag.sentiment.negative || tag.volume * 10;
        let g = tag.sentiment.neutral || tag.volume * 10;
        let b = tag.sentiment.positive || tag.volume * 10;
        if (r > 255) { r = 255 }
        if (g > 255) { g = 255 }
        if (b > 255) { b = 255 }
        return `rgb(${r}, ${g}, ${b})`;
    }

    render() {
        const { tag } = this.props;

        return (
            <div
                className="tag"
                style={{
                    color: this.getColor(tag),
                    fontSize: tag.sentimentScore / 3
                }}
                onClick={() => this.props.history && this.props.history.push(`/${tag.id}`)}
            >
                {tag.label}
            </div>
        )
    };
}
