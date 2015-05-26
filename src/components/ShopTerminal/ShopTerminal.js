import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import styles from './ShopTerminal.less'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class ShopTerminal {

  static contextTypes = {
  };

  static propTypes = {
  };

  render() {
    return (
      <div className="ShopTerminal">
        <div className="ShopTerminal-container">
          test ShopTerminal
        </div>
      </div>
    );
  }

}

export default ShopTerminal;
