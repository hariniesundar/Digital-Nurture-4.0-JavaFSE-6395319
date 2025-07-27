import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data.slice(0, 10) })) // Displaying only 10 posts
      .catch(error => {
        this.setState({ hasError: true });
        alert('Error fetching posts!');
      });
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert('An error occurred while rendering the component.');
  }

  render() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <div className="post-container">
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

}

export default Posts;
