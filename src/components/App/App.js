/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less'; // eslint-disable-line no-unused-vars
import withContext from '../../decorators/withContext'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import ContentPage from '../ContentPage';
import NotFoundPage from '../NotFoundPage';

const pages = { ContentPage };

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;

    switch (this.props.path) {

      case '/':
      // case '/someOtherPath':
        let page = AppStore.getPage(this.props.path);
        component = React.createElement(pages[page.component], page);
        break;

      // case '/someComponent':
      //   component = <SomeComponent />;
      //   break;
    }

    return component ? (
      <div>
        {component}
      </div>
    ) : <NotFoundPage />;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;
