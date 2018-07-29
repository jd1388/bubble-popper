import React, { Component } from 'react';
import Cookies from 'js-cookie';

import SoapSudCounter from '../SoapSudCounter/SoapSudCounter';
import PopRate from '../PopRate/PopRate';
import SoapBubble from '../SoapBubble/SoapBubble';
import BubbleFactory from '../BubbleFactory/BubbleFactory';

import Styles from './Styles';

class DesktopApp extends Component {
  constructor(props) {
    super(props);

    const previousSave = Cookies.get('saveData');

    if (previousSave) {
      const { bubblesPopped, soapSuds, factoriesOwned, popRate } = JSON.parse(previousSave);

      this.state = {
        bubblesPopped,
        soapSuds,
        factoriesOwned,
        popRate,
      }
    } else {
        this.state = {
          bubblesPopped: 0,
          soapSuds: 0,
          factoriesOwned: {},
          popRate: 0,
        };
    }

    window.addEventListener('unload', () => {
      Cookies.set('saveData', JSON.stringify(this.state));
    });

    this.popBubble = this.popBubble.bind(this);
    this.incrementFactoryCount = this.incrementFactoryCount.bind(this);
    this.incrementPopRate = this.incrementPopRate.bind(this);
    this.paySoapSuds = this.paySoapSuds.bind(this);
  }

  popBubble() {
    const { bubblesPopped, soapSuds } = this.state;

    this.setState({
      bubblesPopped: bubblesPopped + 1,
      soapSuds: soapSuds + 1,
    });
  }

  incrementFactoryCount(factory) {
    const { factoriesOwned } = this.state;

    const factoryCount = factoriesOwned[factory] || 0;

    this.setState({
      factoriesOwned: {
        ...factoriesOwned,
        [factory]: factoryCount + 1,
      },
    });
  }

  incrementPopRate(rate) {
    const { popRate } = this.state;

    this.setState({ popRate: popRate + rate });
  }

  paySoapSuds(amountToPay) {
    const { soapSuds } = this.state;

    if (soapSuds < amountToPay) {
      return false;
    }

    this.setState({ soapSuds: soapSuds - amountToPay });

    return true;
  }

  componentDidMount() {    
    setInterval(() => {
      const { soapSuds, bubblesPopped, popRate } = this.state;

      this.setState({
        soapSuds: soapSuds + popRate,
        bubblesPopped: bubblesPopped + popRate,
      });
    }, 1000);
  }

  render() {
    const { soapSuds, factoriesOwned, popRate } = this.state;

    return (
      <div style={Styles.appContainer}>
        <div style={Styles.bubbleContainer}>
          <SoapSudCounter soapSuds={soapSuds}/>
          <PopRate rate={popRate} />
          <SoapBubble onClick={this.popBubble} />
        </div>
        <div style={Styles.menu}>
          <BubbleFactory
            title="Extra Finger"
            soapSuds={soapSuds}
            rate={1}
            initialCost={10}
            count={factoriesOwned.extrafinger || 0}
            paySoapSuds={this.paySoapSuds}
            incrementFactoryCount={() => this.incrementFactoryCount('extrafinger')}
            incrementPopRate={this.incrementPopRate}
          />
          <BubbleFactory
            title="Little Kid"
            soapSuds={soapSuds}
            rate={5}
            initialCost={100}
            count={factoriesOwned.littlekid || 0}
            paySoapSuds={this.paySoapSuds}
            incrementFactoryCount={() => this.incrementFactoryCount('littlekid')}
            incrementPopRate={this.incrementPopRate}
          />
          <BubbleFactory
            title="Pet Dog"
            soapSuds={soapSuds}
            rate={20}
            initialCost={850}
            count={factoriesOwned.petdog || 0}
            paySoapSuds={this.paySoapSuds}
            incrementFactoryCount={() => this.incrementFactoryCount('petdog')}
            incrementPopRate={this.incrementPopRate}
          />
          <BubbleFactory
            title="Grandpa"
            soapSuds={soapSuds}
            rate={85}
            initialCost={2100}
            count={factoriesOwned.grandpa || 0}
            paySoapSuds={this.paySoapSuds}
            incrementFactoryCount={() => this.incrementFactoryCount('grandpa')}
            incrementPopRate={this.incrementPopRate}
          />
          <BubbleFactory
            title="Mom"
            soapSuds={soapSuds}
            rate={210}
            initialCost={9200}
            count={factoriesOwned.mom || 0}
            paySoapSuds={this.paySoapSuds}
            incrementFactoryCount={() => this.incrementFactoryCount('mom')}
            incrementPopRate={this.incrementPopRate}
          />
          <BubbleFactory
            title="Bubble Store"
            soapSuds={soapSuds}
            rate={735}
            initialCost={33000}
            count={factoriesOwned.bubblestore || 0}
            paySoapSuds={this.paySoapSuds}
            incrementFactoryCount={() => this.incrementFactoryCount('bubblestore')}
            incrementPopRate={this.incrementPopRate}
          />
          <BubbleFactory
            title="Bubble Factory"
            soapSuds={soapSuds}
            rate={1900}
            initialCost={112000}
            count={factoriesOwned.bubblefactory || 0}
            paySoapSuds={this.paySoapSuds}
            incrementFactoryCount={() => this.incrementFactoryCount('bubblefactory')}
            incrementPopRate={this.incrementPopRate}
          />
        </div>
      </div>
    );
  }
}

export default DesktopApp;
