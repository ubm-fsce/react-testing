import React, { Component } from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route, Link } from 'react-router-dom';


class App extends Component {

  renderButton() {

  }
  renderHeader() {
    return (
      <ul>
        <li> <Link to='/'>Home</Link></li>
        <li><Link to='/post'> Post comment</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }


  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </ div >
    );
  }
}

export default App;