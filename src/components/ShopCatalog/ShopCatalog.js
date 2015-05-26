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
    return (
      <div className="ShopCatalog">
        <div className="ShopCatalog-container">
          test ShopCatalog
        </div>
      </div>
    );
  }

}

export default ShopCatalog;
