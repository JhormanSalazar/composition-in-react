import React from 'react';
import PostForm from './PostForm';
import Post from './Post';

const MiddleColumn = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      time: "1 min",
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        "https://www.w3schools.com/w3images/lights.jpg",
        "https://www.w3schools.com/w3images/nature.jpg"
      ]
    },
    {
      id: 2,
      name: "Jane Doe",
      time: "16 min",
      avatar: "https://www.w3schools.com/w3images/avatar5.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: []
    },
    {
      id: 3,
      name: "Angie Jane",
      time: "32 min",
      avatar: "https://www.w3schools.com/w3images/avatar6.png",
      content: "Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        "https://www.w3schools.com/w3images/nature.jpg"
      ]
    }
  ];

  return (
    <div className="w3-col m7">
      <PostForm />
      {posts.map(post => (
        <Post
          key={post.id}
          name={post.name}
          time={post.time}
          avatar={post.avatar}
          content={post.content}
          images={post.images}
        />
      ))}
    </div>
  );
};

export default MiddleColumn;