import React, { useEffect, useState } from 'react';
import { ref, onValue, update } from 'firebase/database';
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
          likes: commentsData[key].likes || 0,
        }));

        // Sort the comments from highest to lowest likes
        commentsArray.sort((a, b) => b.likes - a.likes);

        // Update the state with the comments
        setComments(commentsArray);
      }
    });
  }, []); // The empty dependency array ensures this runs once on component mount

  const setLikes = (commentId) => {
    const comment = comments.find((comment) => comment.id === commentId);

    if (comment) {
      const curLikes = comment.likes || 0;
      const newLikes = curLikes + 1;

      const commentsRef = ref(database, 'comments/'+commentId);
      update(commentsRef, {likes: newLikes});
    }
  };


  return (
    <div className="comment-list">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}:</strong> {comment.comment}
            <br></br>
            <button class="heart-shape" onClick={() => setLikes(comment.id)}>♥</button>
            <span>Likes: {comment.likes || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
