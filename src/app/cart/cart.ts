import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from './cart.services';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  standalone: true,
  imports: [CommonModule, Nav, Footer]
})
export class Cart {
  public cartService = inject(CartService);
  public router = inject(Router);

  public get cartItems() {
    return this.cartService.getItems();
  }

  public removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }

  public updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  public getTotal() {
    return this.cartService.getTotal();
  }

  public buySingleItem(id: number) {
    const purchase = this.cartService.purchaseItem(id);
    if (purchase) {
      this.router.navigate(['/purchase'], { queryParams: { purchaseId: purchase.id } });
    } else {
      alert('No fue posible procesar la compra individual.');
    }
  }

  public completePurchase() {
    const purchase = this.cartService.completePurchase();
    if (purchase) {
      this.router.navigate(['/purchase'], { queryParams: { purchaseId: purchase.id } });
    } else {
      alert('El carrito está vacío.');
    }
  }
}
