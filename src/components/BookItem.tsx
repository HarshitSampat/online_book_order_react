import React from 'react';
import Book from '../Book/Book';

interface BookItemProps {
  book: Book;
  onAddToCartClick: (book: Book) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book,onAddToCartClick  }) => {

    const handleAddToCartClick = ()=>{
        console.log("Funcitn called");
        onAddToCartClick(book);
    }

  return (
    <div className="book-item mt-4">
      <img src={book.image} alt={book.title} height={300}/>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price.toFixed(2)}</p>
      <p>Stock: {book.stock}</p>
      <button className='btn btn-dark' onClick={handleAddToCartClick}>Add to cart</button>
    </div>
  );
};

export default BookItem;