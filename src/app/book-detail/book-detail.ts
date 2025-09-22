import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.services';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { BooksService, BookRecord } from '../shared/services/books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.html',
  styleUrls: ['./book-detail.css'],
  standalone: true,
  imports: [CommonModule, Nav, Footer]
})
export class BookDetail implements OnInit {
  book: BookRecord | undefined;
  books: BookRecord[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private booksService: BooksService,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.books = this.booksService.getBooks();
    this.book = this.books.find(b => b.id === id);
  }

  addToCart() {
    if (this.book) {
      this.cartService.addToCart(this.book);
      alert(`${this.book.title} agregado al carrito`);
    }
  }
}
