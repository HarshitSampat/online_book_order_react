import BookInventory from '../Interface/BookInventory';
import Book from './Book';
import data from '../assets/data.json'

class BookstoreInventory implements BookInventory {
  private books: Book[] = [
    // Your book data here
  ];
  constructor() {
    if (data && data.books) {
        this.books = data.books;
    }
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBookByTitle(title: string): Book | undefined {
    return this.books.find((book) => book.title === title);
  }

  placeOrder(title: string, quantity: number): boolean {
    const book = this.getBookByTitle(title);

    if (book && book.stock >= quantity) {
      if (book.price * quantity > 50) {
        // Apply a 20% discount
        book.price *= 0.8;
      }
      book.stock -= quantity;
      return true;
    }

    return false;
  }
}

export default BookstoreInventory;