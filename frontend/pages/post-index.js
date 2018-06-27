import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import PostIndex from '../components/PostIndex';

class PostIndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Post Index</h1>
        <PostIndex limit={20} />
      </div>
    );
  }
}

export default withLayout(PostIndexPage);
