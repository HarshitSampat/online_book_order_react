import { useState } from 'react'
import './App.css'
import BookInventory from './Book/BookInventory'
import BookstoreInventory from './Book/BookInventory'
import BookListComponent from './components/BookListComponent'

function App() {

  const bookInventory: BookInventory = new BookstoreInventory();
  const [books, setBooks] = useState(bookInventory.getBooks());


  return (
    <>
      <div className="App">
      <BookListComponent books={books} />
    </div>
    </>
  )
}

export default App
