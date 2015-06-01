import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import styles from './ShopCartItem.less'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class ShopCartItem {

  static contextTypes = {
  };

  static propTypes = {
  };

  render() {
    var getPrice = function (unitPrice, unitPricePerVolume) {
      return (
        <div>
          <span>price: </span>
          <span>{unitPrice}</span>
        </div>
      );
    };

    return (
      <div className="ShopCartItem">
        <div className="ShopCartItem-container">
          <div>
            <span>name: </span>
            <span>{this.props.name}</span>
          </div>
          <div>
            <span>quantity: </span>
            <span>{this.props.quantity}</span>
          </div>
          {getPrice(this.props.unitPrice, this.props.unitPricePerVolume)}
        </div>
      </div>
    );
  }

}

export default ShopCartItem;
