import React from 'react';
import numeral from 'numeral';
import Styles from './Styles';

const PopRate = ({ rate }) => {
    const formattedRate = numeral(rate).format('0.[00a]');

    return (
        <h2 style={Styles.popRate}>
            Pop Rate:&nbsp;&nbsp;{formattedRate} soap sud{rate !== 1 ? 's' : ''} per second
        </h2>
    );
};

export default PopRate;
