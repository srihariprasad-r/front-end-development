import React from "react";
import faker from "faker";

const commentDetail = (props) => {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.authorName}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.comment}</div>
        </div>
      </div>
    );
};

export default commentDetail;