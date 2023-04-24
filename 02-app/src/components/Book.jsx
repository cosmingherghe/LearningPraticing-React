import React from "react";
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
  return <section className="bookList">{reactBookList}</section>;
}

export function Book(props) {
  const { id, img, title, author, children } = props;
  return (
    <article>
      <h6>{id}</h6>
      <h1>{img}</h1>
      <h3>{title}</h3>
      <h4>{author}</h4>
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
