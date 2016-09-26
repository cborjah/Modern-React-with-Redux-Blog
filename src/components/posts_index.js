import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() { // Called when component is about to be rendered to the DOM for the first time, not on subsequent renders
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <div>List of Blog Posts:</div>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
