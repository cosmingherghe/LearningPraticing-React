import React from "react";

const img = "IMG";
const title = "Title";
const author = "Author";
const forthBook = {
  img: "4th IMG",
  title: "4th Title",
  author: "4th Author",
};

export default function BookList() {
  return (
    <section>
      <Book img="IMG 1" title={title} author={author}>
        <p>This is a child</p>
        <p>This is a second child</p>
      </Book>
      <Book img={img} title="Title 2" author={author} />
      <Book img={img} title={title} />
      <Book
        img={forthBook.img}
        title={forthBook.title}
        author={forthBook.author}
      />
    </section>
  );
}

export function Book({ img, title, author, children }) {
  console.log(children);
  return (
    <article>
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
