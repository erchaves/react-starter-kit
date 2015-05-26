import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import styles from './ShopCart.less'; // eslint-disable-line no-unused-vars
import ShopItem from '../ShopItem'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class ShopCart {

  static contextTypes = {
  };

  static propTypes = {
  };

  render() {
    return (
      <div className="ShopCart">
        <div className="ShopCart-container">
          test ShopCart
          <ul>
            <ShopItem />
            <ShopItem />
          </ul>
        </div>
      </div>
    );
  }

}

export default ShopCart;
