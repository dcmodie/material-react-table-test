import { createContext, useState } from 'react';
const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  //async fetch
  const fetchBooks = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const json = await response.json();
    setBooks(json);
  };

  const valToShare = {
    books: books,
    fetchBooks: fetchBooks,
  };

  return (
    <BooksContext.Provider value={valToShare}>{children}</BooksContext.Provider>
  );
}

export { BooksProvider };
export default BooksContext;
