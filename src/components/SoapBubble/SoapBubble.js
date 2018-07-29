import React, { Component } from 'react';

import Styles from './Styles';

class SoapBubble extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pressed: false,
        };
    }

    render() {
        const { onClick } = this.props;
        const { pressed } = this.state;

        return (
            <div
                onClick={onClick}
                onMouseDown={() => this.setState({ pressed: true })}
                onMouseUp={() => this.setState({ pressed: false })}
                onTouchStart={() => this.setState({ pressed: true })}
                onTouchEnd={() => this.setState({ pressed: false })}
                style={{
                    ...Styles.bubbleContainer,
                    boxShadow: pressed ? '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' : '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
                }}
            >
                <img
                    src="bubble.svg"
                    alt=""
                    style={Styles.bubble}
                />
            </div>
        );
    }
}

export default SoapBubble;