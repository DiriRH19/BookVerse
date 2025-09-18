import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-card.html',
  styleUrls: ['./book-card.css']
})
export class BookCard {
  @Input() book!: any;

  getRatingColor(rating: number): string {
    if (rating >= 4.5) return '#22c55e';
    if (rating >= 4.0) return '#3b82f6';
    if (rating >= 3.0) return '#f59e0b';
    return '#ef4444';
  }

  getRatingBackground(rating: number): string {
    if (rating >= 4.5) return 'rgba(34, 197, 94, 0.1)';
    if (rating >= 4.0) return 'rgba(59, 130, 246, 0.1)';
    if (rating >= 3.0) return 'rgba(245, 158, 11, 0.1)';
    return 'rgba(239, 68, 68, 0.1)';
  }
}
