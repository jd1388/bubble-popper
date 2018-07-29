import React from 'react';
import numeral from 'numeral';

import Styles from './Styles';

const SoapSudCounter = ({ soapSuds, mobile }) => {
    const formattedSoapSudCount = numeral(soapSuds).format('0.[00a]');

    return (
        <h1 style={mobile ? Styles.mobileSoapSudCounter : Styles.soapSudCounter}>
            Soap Suds:&nbsp;&nbsp;{formattedSoapSudCount}
        </h1>
    );
};

export default SoapSudCounter;
