import React, { Component } from 'react';

import Styles from './Styles';

class MenuButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pressed: false,
        };
    }

    render() {
        const { pressed } = this.state;

        return (
            <div
                onMouseDown={() => this.setState({ pressed: true })}
                onMouseUp={() => this.setState({ pressed: false })}
                onTouchStart={() => this.setState({ pressed: true })}
                onTouchEnd={() => this.setState({ pressed: false })}
                style={{
                    ...Styles.menuButton,
                    backgroundColor: pressed ? '#79BAEC' : 'lightblue',
                }}
            >
                Upgrades
            </div>
        )
    }
}

export default MenuButton;
