import React from 'react';

const PopRate = ({ rate }) => (
    <h2>Pop Rate:&nbsp;&nbsp;{rate} soap sud{rate !== 1 ? 's' : ''} per second</h2>
);

export default PopRate;
