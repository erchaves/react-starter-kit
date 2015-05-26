/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './ContentPage.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import ShopTerminal from '../ShopTerminal'; // eslint-disable-line no-unused-vars
import ShopCart from '../ShopCart'; // eslint-disable-line no-unused-vars
import ShopCatalog from '../ShopCatalog'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class ContentPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
          {
            this.props.path === '/' ? null : <h1>{this.props.title}</h1>
          }
          <div dangerouslySetInnerHTML={{__html: this.props.content || ''}} />
          <ShopTerminal />
          <ShopCatalog />
          <ShopCart />
        </div>
      </div>
    );
  }

}

export default ContentPage;
