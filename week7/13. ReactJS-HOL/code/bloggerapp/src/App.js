import React, { Component } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'book'
    };
  }

  render() {
    const { view } = this.state;

    let content;
    if (view === 'book') {
      content = <BookDetails />;
    } else if (view === 'blog') {
      content = <BlogDetails />;
    } else {
      content = <CourseDetails />;
    }

    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Blogger App</h1>

        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => this.setState({ view: 'book' })}>Book Details</button>{' '}
          <button onClick={() => this.setState({ view: 'blog' })}>Blog Details</button>{' '}
          <button onClick={() => this.setState({ view: 'course' })}>Course Details</button>
        </div>

        <div style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          display: 'inline-block',
          backgroundColor: '#f5f5f5'
        }}>
          {content}
        </div>
      </div>
    );
  }
}

export default App;
