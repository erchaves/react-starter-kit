import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import styles from './ShopCatalog.less'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class ShopCatalog {

  static contextTypes = {
  };

  static propTypes = {
  };

  render() {
    var rows = [];
    var key;
    var item;
    for (key in this.props.items) {
      item = this.props.items[key];
      rows.push(
        <li>
          <div>
            <span>name: </span>
            <span>{item.name}</span>
          </div>
          <div>
            <span>price: </span>
            <span>{item.unitPrice}</span>
          </div>
        </li>
      );
    }

    return (
      <div className="ShopCatalog">
        <div className="ShopCatalog-container">
          <h4>Shop Catalog Items</h4>
          <ul>
            {rows}
          </ul>
        </div>
      </div>
    );
  }

}

export default ShopCatalog;
