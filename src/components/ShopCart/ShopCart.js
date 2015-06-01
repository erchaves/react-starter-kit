import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import styles from './ShopCart.less'; // eslint-disable-line no-unused-vars
import ShopCartItem from '../ShopCartItem'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class ShopCart {

  static contextTypes = {
  };

  static propTypes = {
  };

  render() {
    var rows = this.props.items.map(function (item) {
      return <ShopCartItem name={item.name} quantity={item.quantity} unitPrice={item.unitPrice} />;
    });

    return (
      <div className="ShopCart">
        <div className="ShopCart-container">
          <h4>Shop Cart</h4>
          <div>
            {rows}
          </div>
        </div>
      </div>
    );
  }
}

export default ShopCart;
