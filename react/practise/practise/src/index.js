import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//stateless functional component

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};


const Book = () => {
  return (
    <article className='book'>
      <BookImage />
      <Title />
      <Author />
    </article>
  );
};

const BookImage = () => {
  return (        <img
          src=""
          alt=""
        />);
}

const Title = () => <h3>Diary of a Wimpy Kid: The Deep End</h3>;

const Author = () => <h4>Jeff Kinney</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));