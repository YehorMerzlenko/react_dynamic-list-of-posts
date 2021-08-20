import React from 'react';
import './PostsList.scss';

export const PostsList = ({posts, selectPost}) => {


  return (

    <div className="PostsList">
      <h2>Posts:</h2>

      <ul className="PostsList__list">
        {posts.map(post => (
          <li key={post.id} className="PostsList__item">
            <div>
              <b>User# {post.userId}</b>
              {post.body}
            </div>
            <button
              type="button"
              className="PostsList__button button"
              onClick={selectPost(post.id)}
            >
              Close
            </button>
          </li>

        ))}
      </ul>
    </div>
  )
};
