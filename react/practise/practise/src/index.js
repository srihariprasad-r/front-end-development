import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//stateless functional component

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
};


const Book = () => {
  const title = "Diary of a Wimpy Kid: The Deep End";
  return (
    <article className="book">
      <img src="" alt="" />
      <hi>{title}</hi>
      <h3>Jeff Kinney</h3>
    </article>
  );
};


ReactDOM.render(<BookList />, document.getElementById("root"));