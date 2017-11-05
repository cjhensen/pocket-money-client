import React from 'react';
import {connect} from 'react-redux';

// Actions
import {changeView} from '../../actions';

// Components
import App from './app';
import IndexViewContainer from '../indexView';
import CategoriesContainer from '../categories';
import NavBar from '../navBar';

export class AppContainer extends React.Component {

  // show index view if not logged in
  showIndex() {
    if(!this.props.isLoggedIn) {
      return <IndexViewContainer 
              currentView={this.props.currentView} 
              changeView={view => this.changeView(view)} />
    }
  }

  // if logged in, show component based on state
  showView() {
    if(this.props.isLoggedIn === true) {
      switch(this.props.currentView) {
        case 'overview':
          return <div className="overviewComponent">overviewComponent</div>;
        case 'transactions':
          return <div>transactions</div>;
        case 'categories':
          return <CategoriesContainer />;
        case 'insights':
          return <div>insights</div>;
        case 'settings':
          return <div>settings</div>;
        default:
          return <div>That page does not exist</div>;
      }
    }
  }

  changeView(view) {
    this.props.dispatch(changeView(view));
  }

  showNav() {
    const navElements = [
      'overview',
      'transactions',
      'categories',
      'insights',
      'settings'
    ];

    if(this.props.isLoggedIn) {
      return <NavBar
                navElements={navElements}
                currentView={this.props.currentView}
                changeView={view => this.changeView(view)} />
    }
  }

  render() {
    return(
      <App 
        indexComponent={this.showIndex()}
        viewComponent={this.showView()}
        navComponent={this.showNav()} />
    );
  }

}

const mapStateToProps = state => ({
  currentView: state.currentView,
  isLoggedIn: state.isLoggedIn
});
export default connect(mapStateToProps)(AppContainer);