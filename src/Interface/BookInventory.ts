import Book from '../Book/Book';

interface BookInventory {
  getBooks(): Book[];
  getBookByTitle(title: string): Book | undefined;
  placeOrder(title: string, quantity: number): boolean;
}

export default BookInventory;