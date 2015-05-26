import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import styles from './ShopItem.less'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class ShopItem {

  static contextTypes = {
  };

  static propTypes = {
  };

  render() {
    return (
      <div className="ShopItem">
        <div className="ShopItem-container">
          test ShopItem
        </div>
      </div>
    );
  }

}

export default ShopItem;
