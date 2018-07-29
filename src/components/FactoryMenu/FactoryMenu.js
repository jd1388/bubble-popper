import React from 'react';

import SoapSudCounter from '../SoapSudCounter/SoapSudCounter';
import BubbleFactory from '../BubbleFactory/BubbleFactory';

import Styles from './Styles';

const FactoryMenu = ({ displayed, soapSuds, factoriesOwned, paySoapSuds, incrementFactoryCount, incrementPopRate }) => {
    return (
        <div
            style={{
                ...Styles.factoryMenu,
                display: displayed ? 'flex' : 'none'
            }}
        >
            <div style={{ borderBottom: '1px solid blue' }}>
                <SoapSudCounter soapSuds={soapSuds} mobile/>
            </div>
            <BubbleFactory
                title="Extra Finger"
                soapSuds={soapSuds}
                rate={1}
                initialCost={10}
                count={factoriesOwned.extrafinger || 0}
                paySoapSuds={paySoapSuds}
                incrementFactoryCount={() => incrementFactoryCount('extrafinger')}
                incrementPopRate={incrementPopRate}
                mobile
            />
            <BubbleFactory
                title="Little Kid"
                soapSuds={soapSuds}
                rate={5}
                initialCost={100}
                count={factoriesOwned.littlekid || 0}
                paySoapSuds={paySoapSuds}
                incrementFactoryCount={() => incrementFactoryCount('littlekid')}
                incrementPopRate={incrementPopRate}
                mobile
            />
            <BubbleFactory
                title="Pet Dog"
                soapSuds={soapSuds}
                rate={20}
                initialCost={850}
                count={factoriesOwned.petdog || 0}
                paySoapSuds={paySoapSuds}
                incrementFactoryCount={() => incrementFactoryCount('petdog')}
                incrementPopRate={incrementPopRate}
                mobile
            />
            <BubbleFactory
                title="Grandpa"
                soapSuds={soapSuds}
                rate={85}
                initialCost={2100}
                count={factoriesOwned.grandpa || 0}
                paySoapSuds={paySoapSuds}
                incrementFactoryCount={() => incrementFactoryCount('grandpa')}
                incrementPopRate={incrementPopRate}
                mobile
            />
            <BubbleFactory
                title="Mom"
                soapSuds={soapSuds}
                rate={210}
                initialCost={9200}
                count={factoriesOwned.mom || 0}
                paySoapSuds={paySoapSuds}
                incrementFactoryCount={() => incrementFactoryCount('mom')}
                incrementPopRate={incrementPopRate}
                mobile
            />
            <BubbleFactory
                title="Bubble Store"
                soapSuds={soapSuds}
                rate={735}
                initialCost={33000}
                count={factoriesOwned.bubblestore || 0}
                paySoapSuds={paySoapSuds}
                incrementFactoryCount={() => incrementFactoryCount('bubblestore')}
                incrementPopRate={incrementPopRate}
                mobile
            />
            <BubbleFactory
                title="Bubble Factory"
                soapSuds={soapSuds}
                rate={1900}
                initialCost={112000}
                count={factoriesOwned.bubblefactory || 0}
                paySoapSuds={paySoapSuds}
                incrementFactoryCount={() => incrementFactoryCount('bubblefactory')}
                incrementPopRate={incrementPopRate}
                mobile
            />
        </div>
    );
};

export default FactoryMenu;
