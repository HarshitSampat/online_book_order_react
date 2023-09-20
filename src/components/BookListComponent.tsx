import React, { useState } from 'react';
import Book from '../Book/Book';
import BookItem from './BookItem';

interface BookListComponentProps {
    books: Book[];
}

const BookListComponent: React.FC<BookListComponentProps> = ({ books }) => {
    const [cartItems, setCartItems] = useState<(Book & { quantity: number })[]>([]);
    const addToCart = (book: Book) => {
        const existingCartItem = cartItems.find((item) => item.title === book.title);

    if (existingCartItem) {
      // Check if the quantity to be added is less than or equal to the available stock
      if (existingCartItem.stock >= existingCartItem.quantity + 1) {
        // Clone the existing cart items
        const updatedCartItems = [...cartItems];

        // Find the index of the existing item in the cloned array
        const itemIndex = updatedCartItems.findIndex((item) => item.title === book.title);

        // Increment the quantity of the existing item
        updatedCartItems[itemIndex].quantity += 1;

        // Update the cart
        setCartItems(updatedCartItems);
      }
    } else {
      // If the book is not in the cart, check if it's in stock
      if (book.stock >= 1) {
        // Add the book to the cart with an initial quantity of 1
        setCartItems([...cartItems, { ...book, quantity: 1 }]);
      }
    }
    }

    return (
        <div>
            <div className="row">
                <div className='col-md-6'>
                    <h2>Book List</h2>
                    {books.map((book) => (
                        <BookItem key={book.title} book={book} onAddToCartClick={addToCart} />
                    ))}
                </div>
                <div className='col-md-6'>
                    <h2>Cart Items</h2>
                    <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.title} (Quantity: {item.quantity})</li>
            ))}
          </ul>
                </div>
            </div>
        </div>
    );
};

export default BookListComponent;