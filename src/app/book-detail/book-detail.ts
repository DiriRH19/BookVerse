import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.services';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Catalog } from '../catalog/catalog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.html',
  styleUrls: ['./book-detail.css'],
  standalone: true,
  imports: [CommonModule, Nav, Footer]
})
export class BookDetail implements OnInit {
  book: any;
  books = new Catalog().books;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.book = this.books.find(b => b.id === id);
  }

  addToCart() {
    if (this.book) {
      this.cartService.addToCart(this.book);
      alert(`${this.book.title} agregado al carrito`);
    }
  }
}
