import React from  'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
        <CommentDetail 
            authorName="Sam" 
            timeAgo="Today at 03:05PM" 
            comment="How are you?"
        />
        <CommentDetail 
            authorName="Alex" 
            timeAgo="Today at 13:25PM" 
            comment="Happy Monday!" 
        />
      </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);