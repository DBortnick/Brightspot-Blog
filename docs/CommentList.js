import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import database from './FireConfig.js';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  // Use the `useEffect` hook to listen for changes in the database
  useEffect(() => {
    const commentsRef = ref(database, 'comments');

    // Attach a listener to the "comments" node in the database
    onValue(commentsRef, (snapshot) => {
      if (snapshot.exists()) {
        const commentsData = snapshot.val();

        // Convert the comments data into an array
        const commentsArray = Object.keys(commentsData).map((key) => ({
          id: key, // Use the unique ID as the comment's ID
          ...commentsData[key],
        }));

        // Update the state with the comments
        setComments(commentsArray);
      }
    });
  }, []); // The empty dependency array ensures this runs once on component mount

  return (
    <div className="comment-list">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}:</strong> {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
