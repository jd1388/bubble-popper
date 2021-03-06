import React, { Component } from 'react';
import Cookies from 'js-cookie';

import MenuButton from '../MenuButton/MenuButton';
import SoapSudCounter from '../SoapSudCounter/SoapSudCounter';
import PopRate from '../PopRate/PopRate';
import SoapBubble from '../SoapBubble/SoapBubble';
import FactoryMenu from '../FactoryMenu/FactoryMenu';

import Styles from './Styles';

class MobileApp extends Component {
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
        menuDisplayed: false,
      }
    } else {
        this.state = {
          bubblesPopped: 0,
          soapSuds: 0,
          factoriesOwned: {},
          popRate: 0,
          menuDisplayed: false,
        };
    }

    window.addEventListener('unload', () => {
      Cookies.set('saveData', JSON.stringify(this.state));
    });

    this.toggleMenu = this.toggleMenu.bind(this);
    this.popBubble = this.popBubble.bind(this);
    this.incrementFactoryCount = this.incrementFactoryCount.bind(this);
    this.incrementPopRate = this.incrementPopRate.bind(this);
    this.paySoapSuds = this.paySoapSuds.bind(this);
  }

  toggleMenu() {
    const { menuDisplayed } = this.state;

    this.setState({ menuDisplayed: !menuDisplayed })
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
    const { soapSuds, popRate, menuDisplayed, factoriesOwned } = this.state;

    return (
      <div style={Styles.appContainer}>
        <MenuButton
          onClick={this.toggleMenu}
          text={menuDisplayed ? 'Close' : 'Upgrades'}
        />
        <div style={Styles.bubbleContainer}>
          <SoapSudCounter soapSuds={soapSuds}/>
          <PopRate rate={popRate} />
          <SoapBubble onClick={this.popBubble} diameter={75} />
        </div>
        <FactoryMenu
          displayed={menuDisplayed}
          soapSuds={soapSuds}
          factoriesOwned={factoriesOwned}
          paySoapSuds={this.paySoapSuds}
          incrementFactoryCount={this.incrementFactoryCount}
          incrementPopRate={this.incrementPopRate}
        />
      </div>
    );
  }
}

export default MobileApp;
