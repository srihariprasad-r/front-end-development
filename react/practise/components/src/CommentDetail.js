import React from "react";
import faker from "faker";

const commentDetail = () => {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Mr.Author
          </a>
          <div className="metadata">
            <span className="date">Today at 06:00 PM</span>
          </div>
          <div className="text">Blog post</div>
        </div>
      </div>
    );
};

export default commentDetail;