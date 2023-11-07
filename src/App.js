import React, { Component } from 'react';
import BlogPost from './BlogPost.js';
import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [] // Initially, an empty array to hold comments
    };
  }

  // A function to add a new comment to the state
  addComment = (comment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, comment]
    }));
  };

  // A function to share the blog post by coping the URL to the clipboard
  // Tell the user that the link has been copied
  sharePost = () => {
    // const url = window.location.href;
    // navigator.clipboard.writeText(url);
    // alert('Link copied to clipboard!');

    navigator.clipboard.writeText(window.location.href).then(function(x) {
      alert("Link copied to clipboard: " + window.location.href);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Brightspot Blogs</h1>
        <BlogPost sharePost={this.sharePost} />
        <CommentForm addComment={this.addComment} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
