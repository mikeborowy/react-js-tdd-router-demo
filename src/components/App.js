import React from 'react';
//Router
import {Route, Link} from 'react-router-dom';
//React redux
import {connect} from 'react-redux';
//Redux
import {bindActionCreators} from 'redux';
import {onChangeAuth} from 'reducers/auth';
//components
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends React.Component {

  onLogClick = (evt) => {
    this.props.auth 
    ? this.props.onChangeAuth(false)
    : this.props.onChangeAuth(true);
  }

  renderHeader() {
    return(
      <ul>
        <li>
          <Link to='/'>Home</Link> 
        </li>
        <li>
          <Link to='/post'>Post a comment</Link> 
        </li>
        <li>
          <button onClick={this.onLogClick}>{this.props.auth ? 'Sign Out' : 'Sign In'}</button>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox}/>
        <Route path='/' exact component={CommentList}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    auth: state.auth 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    onChangeAuth
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
