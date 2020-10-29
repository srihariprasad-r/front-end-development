import React from 'react';
import ReactDOM from 'react-dom';

//stateless functional component

function BookList() {
  return (
  <section>
    <Book />
    <Title />
    <Author />
  </section>
  );
};


const Book = () => {
  return (
    <img
      src=""
      alt=""
    />
  );
};


const Title = () => <h3>Diary of a Wimpy Kid: The Deep End</h3>;

const Author = () => <h4>Jeff Kinney</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));