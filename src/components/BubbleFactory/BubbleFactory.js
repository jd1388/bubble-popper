import React, { Component } from 'react';
import numeral from 'numeral';

import Styles from './Styles';

const format = (valueToFormat) => numeral(valueToFormat).format('0.[00a]');

class BubbleFactory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pressed: false,
        }

        this.purchaseFactory = this.purchaseFactory.bind(this);
        this.getCurrentCost = this.getCurrentCost.bind(this);
        this.getBackgroundColor = this.getBackgroundColor.bind(this);
    }

    purchaseFactory() {
        const { paySoapSuds, incrementFactoryCount, incrementPopRate, rate } = this.props;

        const currentCost = this.getCurrentCost();

        const paidSuccessfully = paySoapSuds(currentCost);

        if (paidSuccessfully) {
            incrementFactoryCount();
            incrementPopRate(rate);
        }
    }

    getCurrentCost() {
        const { initialCost, count } = this.props;

        const incrementRate = Math.pow(1.25, count);

        return Math.round(initialCost * incrementRate);
    }

    getBackgroundColor() {
        const { soapSuds } = this.props;
        const { pressed } = this.state;

        const currentCost = this.getCurrentCost();

        if (soapSuds < currentCost) {
            return 'gray';
        }

        if (pressed) {
            return 'lightgray';
        }

        return 'white';
    }

    render() {
        const { title, count, rate } = this.props;

        const currentCost = this.getCurrentCost();

        return (
            <div
                onClick={this.purchaseFactory}
                onMouseDown={() => this.setState({ pressed: true })}
                onMouseUp={() => this.setState({ pressed: false })}
                onTouchStart={() => this.setState({ pressed: true })}
                onTouchEnd={() => this.setState({ pressed: false })}
                style={{
                    ...Styles.bubbleFactory,
                    backgroundColor: this.getBackgroundColor(),
                }}
            >
                <div style={Styles.bubbleFactoryInfo}>
                    <div style={Styles.bubbleFactoryTitle}>{title}</div>
                    <div style={Styles.bubbleFactoryCount}>{format(count)}</div>
                </div>
                <div style={Styles.bubbleFactoryInfo}>
                    <div style={Styles.bubbleFactoryRate}>+{rate}</div>
                    <div style={Styles.bubbleFactoryCost}>{format(currentCost)}</div>
                </div>
            </div>
        );
    }
}

export default BubbleFactory;
