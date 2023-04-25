import React, { useState } from "react";
import "../App.css";

const bookList = [
  {
    id: 1,
    title: "Unlocking Android",
    img: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    author: "Charlie Collins",
  },
  {
    id: 2,
    title: "Android in Action, Second Edition",
    img: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    author: "W. Frank Ableson",
  },
  {
    id: 3,
    title: "Specification by Example",
    img: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    author: "Gojko Adzic",
  },
];

const reactBookList = bookList.map((book) => {
  return (
    <div>
      <Book {...book} key={book.id}></Book>
    </div>
  );
});

export default function BookList() {
  return (
    <section className="bookList">
      <EventExamples />
      {reactBookList}
    </section>
  );
}

function getBookById(id) {
  const book = bookList.find((book) => book.id === id);
  console.log(book);
}

const EventExamples = () => {
  const [exampleInput, setExampleInput] = useState("");
  function getExampleInput(e) {
    setExampleInput(e.target.value);
  }
  function getBook() {
    console.log(exampleInput);
    const book = bookList.find((book) => book.id === exampleInput);
    console.log(book);
    return book;
  }

  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target}`);
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
  };
  const handleButtonClick = () => {
    console.log(exampleInput);
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          name="example"
          onChange={getExampleInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={getBook}>
        click me
      </button>
    </section>
  );
};

export function Book(props) {
  const { id, img, title, author, children } = props;
  function getThisBook() {
    const book = bookList.find((book) => book.id === id);
    console.log(book);
  }
  return (
    <article>
      <h6>{id}</h6>
      <h1>{img}</h1>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button type="button" onClick={getThisBook}>
        Get Book
      </button>
      {children}
    </article>
  );
}

export function Book2() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => {
  return <h2>Img</h2>;
};

const Title = () => {
  return <h3>Title</h3>;
};

const Author = () => {
  return <h4>Author</h4>;
};
