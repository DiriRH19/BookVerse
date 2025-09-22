import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { BookCard } from '../book-card/book-card';
import { CommonModule } from '@angular/common';
import { BooksService } from '../shared/services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, Nav, Footer, BookCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
books = [] as ReturnType<BooksService['getBooks']>;
filtered = [] as ReturnType<BooksService['getBooks']>;

  constructor(private readonly booksService: BooksService, private route: ActivatedRoute) {
    this.books = this.booksService.getBooks();
    this.route.queryParamMap.subscribe(params => {
      const q = params.get('q')?.toLowerCase().trim() || '';
      this.filtered = q ? this.applyFilter(q) : this.books;
    });
  }

  private applyFilter(query: string) {
    return this.books.filter(b =>
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query)
    );
  }
}