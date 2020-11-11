import React from  'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            authorName="Sam"
            timeAgo="Today at 03:05PM"
            comment="How are you?"
          />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
              authorName="Alex"
              timeAgo="Today at 13:25PM"
              comment="Happy Monday!"
            />
        </ApprovalCard>
      </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);