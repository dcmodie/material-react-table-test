import { useState, useEffect, useContext } from 'react';
import useFetchHook from './hooks/useFetchHook';
import MyList from './components/MyList';
import MyTable from './components/MyTable';
import BooksContext from './context/BooksContext';
//import MyMatTable from './components/MyMatTable';
import './App.css';
import { useToggleHook } from './hooks/useToggleHook';

function App() {
  const [url, setUrl] = useState('');
  const { data, error, isLoading } = useFetchHook(url);
  const [num, setNum] = useState(0);
  const { value, toggle } = useToggleHook();
  const { books, fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  const myObj = { data: data, error: error, isLoading: isLoading };

  return (
    <>
      <div>
        <div>yo{num}</div>
        <MyList myObj={myObj} />
        <input
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          value={url}
        />
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          clickmee
        </button>
        <MyTable />
        <div>
          <div>{value.toString()}</div>
          <button onClick={toggle}>Toggle</button>
        </div>
        <div>books</div>
        <div>{books.length}</div>
      </div>
    </>
  );
}

export default App;
