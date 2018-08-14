import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './taginfo.css';

export default class TagInfo extends Component {

    static propTypes = {
        tag: PropTypes.object.isRequired
    };
    static defaultProps = {};

    render() {
        const { tag } = this.props;

        return (
            <div className="taginfo">
                <div className="taginfo__title">TagInfo:</div>
                <div className="taginfo__row">
                    <div className="taginfo__label">Label:</div>
                    <div className="taginfo__value">{tag.label}</div>
                </div>
                <div className="taginfo__row">
                    <div className="taginfo__label">Total Mentions:</div>
                    <div className="taginfo__value">{tag.volume}</div>
                </div>
                <div className="taginfo__row">
                    <div className="taginfo__label">Positive Mentions:</div>
                    <div className="taginfo__value">{tag.sentiment.positive || 'None'}</div>
                </div>
                <div className="taginfo__row">
                    <div className="taginfo__label">Neutral Mentions:</div>
                    <div className="taginfo__value">{tag.sentiment.neutral || 'None'}</div>
                </div>
                <div className="taginfo__row">
                    <div className="taginfo__label">Negative Mentions:</div>
                    <div className="taginfo__value">{tag.sentiment.negative || 'None'}</div>
                </div>
                <div className="taginfo__row">
                    <div className="taginfo__label">List of page types:</div>
                    <div className="taginfo__value">
                        <ul>
                            {Object.keys(tag.pageType).map((key, index) => <li key={index}>{`${key}: ${tag.pageType[key]}`}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    };

}
