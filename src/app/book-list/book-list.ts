import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Book {
  title: string;
  author: string;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css'],
})
export class BookList {
  @Input() books: any[] = [];
}