import React from 'react';
import {connect} from 'react-redux';

import IndexView from '../indexView/indexView';
import NavBar from '../navBar/navBar';

import './app.css';

import {changeView} from '../../actions'

export class App extends React.Component {

  showIndex() {
    if(!this.props.isLoggedIn) {
      return <IndexView />;
    }
  }

  // show component view based on state
  showView() {
    if(this.props.currentView === 'overview' && this.props.isLoggedIn === true) {
      return <div className="overviewComponent">overview component</div>
    }
    if(this.props.currentView === 'transactions' && this.props.isLoggedIn === true) {
      return <div>transactions component</div>
    }
    if(this.props.currentView === 'categories' && this.props.isLoggedIn === true) {
      return <div>categories component</div>
    }
    if(this.props.currentView === 'insights' && this.props.isLoggedIn === true) {
      return <div>insights component</div>
    }
    if(this.props.currentView === 'settings' && this.props.isLoggedIn === true) {
      return <div>settings component</div>
    }
  }



  showNav() {
    const navElements = [
      "overview",
      "transactions",
      "categories",
      "insights",
      "settings"
    ];
    if(this.props.isLoggedIn) {
      return <NavBar 
                navElements={navElements} 
                currentView={this.props.currentView} 
                changeView={view => this.changeView(view)} />;
    }
  }

  changeView(view) {
    this.props.dispatch(changeView(view));
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="wrapper">
          {this.showIndex()}

          <div className="app">
            {this.showView()}
            {this.showNav()}
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentView: state.currentView,
  isLoggedIn: state.isLoggedIn
});
export default connect(mapStateToProps)(App);