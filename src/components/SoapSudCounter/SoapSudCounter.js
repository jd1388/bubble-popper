import React from 'react';
import numeral from 'numeral';

const SoapSudCounter = ({ soapSuds }) => {
    const formattedSoapSudCount = numeral(soapSuds).format('0.[00a]');

    return (
        <h1>Soap Suds:&nbsp;&nbsp;{formattedSoapSudCount}</h1>
    );
};

export default SoapSudCounter;
