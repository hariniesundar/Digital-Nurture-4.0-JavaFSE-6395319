import React from 'react';
import './App.css'; // or './Blog.css' if using that

class Post extends React.Component {
  render() {
    return (
      <div className="post-card">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
