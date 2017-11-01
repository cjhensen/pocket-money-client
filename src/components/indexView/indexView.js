import React from 'react';
import {connect} from 'react-redux';

// Actions
import {changeView} from '../../actions'

// Assets
import './indexView.css';

// Components
import AuthCtrl from '../authCtrl/authCtrl';


export class IndexView extends React.Component {  

  showSignUp(e) {
    console.log('showSignUp');
    e.preventDefault();
    this.props.dispatch(changeView('signup'));
  }

  showLogIn(e) {
    console.log('showLogIn');
    e.preventDefault();
    this.props.dispatch(changeView('login'));
  }


  render() {

    if(this.props.currentView === 'index') {
      return (
        <div id="view-index">

          <div>
            About
            <br />
            <button 
              type="button" 
              onClick={(e) => this.showSignUp(e)}>Sign Up</button>
            <br />
            <button 
              type="button" 
              onClick={(e) => this.showLogIn(e)}>Log In</button>
          </div>

        </div>  
      );
    }

    if(this.props.currentView === 'signup') {
      return (
        <AuthCtrl authView={'signup'} />
      );
    }

    if(this.props.currentView === 'login') {
      return (
        <AuthCtrl authView={'login'} />
      );
    }


  }
}

const mapStateToProps = state => ({
  currentView: state.currentView
});
export default connect(mapStateToProps)(IndexView);