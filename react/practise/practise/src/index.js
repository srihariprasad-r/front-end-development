import React from 'react';
import ReactDOM from 'react-dom';

//stateless functional component

// function Greeting() {
//   return (
//       <div>
//         <h4>This is heading!</h4>
//       </div>
//       );
// };

const Greeting = () => {
  return React.createElement('h4', {} , 'hello world!')
};

ReactDOM.render(
  <Greeting />, 
  document.getElementById('root')
);