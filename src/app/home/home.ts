import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Banner } from '../banner/banner';
import { BookList } from '../book-list/book-list';
import { Catalog } from '../catalog/catalog';
import { BooksService, BookRecord } from '../shared/services/books.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Nav, Footer, Banner, BookList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featuredBooks: BookRecord[] = [];

  constructor(private readonly booksService: BooksService) {
    const all = this.booksService.getBooks();
    this.featuredBooks = this.pickRandom(all, 4);
  }

  private pickRandom<T>(source: T[], count: number): T[] {
    const copy = [...source];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(count, copy.length));
  }
}
