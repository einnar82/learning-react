import React from "react";

const Card = ({ post }) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem"
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};

export default Card;
