import React, { useState } from 'react';
import {ref, push } from 'firebase/database';
import database from './FireConfig.js';

const CommentForm = ({ addComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new comment object with name and comment
    // Make sure neither field is empty
    if (!name || !comment) {
      alert('Please fill out all fields');
      return;
    }
    const newComment = {
      name,
      comment,
      likes: 0,
    };
    // Call the addComment function to add the new comment
    addComment(newComment);

    // Push the new comment to the "comments" node in the database
    const commentsRef = ref(database, 'comments');
    push(commentsRef, newComment);

    // Let user know comment was added
    alert('Comment Successfully Added');

    // Reset the form fields
    setName('');
    setComment('');
  };

  return (
    <div className="comment-form">
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="formfield">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            placeholder='Comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
