import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { CartService } from '../cart/cart.services';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, Nav, Footer],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  constructor(private cartService: CartService) {}

  get recentBooks() {
    return this.cartService.getPurchases();
  }
}
