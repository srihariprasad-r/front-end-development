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
  return (
    <article className='book'>
      <BookImage />
      <Title />
      <Author />
    </article>
  );
};

const BookImage = () => {
  return (
        <img
          src=""
          alt=""
        />);
}

const Title = () => <h3>Diary of a Wimpy Kid: The Deep End</h3>;

const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Jeff Kinney</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));