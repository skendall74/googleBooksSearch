import React from "react";
import BookResult from "./BookResult";

function BooksContainer(props) {
  if (props.path === "/") {
    return (
      <div id="booksContainer">
        <h3>Books Found</h3>
        {props.bookData.map(book => {
          const bookInfo = book.volumeInfo;
          return (
            <BookResult
              title={bookInfo.title}
              authors={bookInfo.authors}
              description={bookInfo.description}
              link={bookInfo.canonicalVolumeLink}
              img={bookInfo.imageLinks}
              path={props.path}
              key={book.id}
            />
          );
        })}
      </div>
    );
  } else if (props.path === "/saved") {
    if (props.savedBooks.length > 0) {
      return (
        <div id="booksContainer">
          <h3>Saved Books</h3>
          {props.savedBooks.map(book => {
            return (
              <BookResult
                title={book.title}
                authors={book.authors}
                description={book.description}
                link={book.link}
                img={book.img}
                id={book._id}
                path={props.path}
                key={book._id}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div id="booksContainer">
          <h3>Saved Books</h3>
          <p>No saved books.</p>
        </div>
      );
    }
  }
}

export default BooksContainer;
