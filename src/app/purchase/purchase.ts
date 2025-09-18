import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.services';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.html',
  styleUrls: ['./purchase.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, Nav, Footer]
})
export class Purchase {
  private cartService = inject(CartService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  name = '';
  email = '';
  address = '';
  paymentMethod = 'Tarjeta';

  public purchaseId: number | null = null;
  public purchase: any | null = null;

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.purchaseId = params['purchaseId'] ? +params['purchaseId'] : null;

      if (this.purchaseId) {
        const all = this.cartService.getPurchases()();
        this.purchase = all.find((p: any) => p.id === this.purchaseId) || null;
      }
    });
  }

  protected get cartItems() {
    return this.purchase ? this.purchase.items : [];
  }

  protected get total() {
    return this.purchase ? this.purchase.total : 0;
  }

  protected submitOrder() {
    if (!this.name || !this.email || !this.address) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (this.purchaseId && this.purchase) {
      const buyer = {
        name: this.name,
        email: this.email,
        address: this.address,
        paymentMethod: this.paymentMethod
      };
      const updated = this.cartService.attachBuyerToPurchase(this.purchaseId, buyer);
      alert(`¡Gracias por tu compra, ${this.name}! Tu pedido ha sido procesado. Total: $${updated?.total ?? this.total}`);
      this.router.navigate(['/']);
      return;
    }

    const purchase = this.cartService.completePurchase();
    if (purchase) {
      const updated = this.cartService.attachBuyerToPurchase(purchase.id, {
        name: this.name,
        email: this.email,
        address: this.address,
        paymentMethod: this.paymentMethod
      });
      alert(`¡Gracias por tu compra, ${this.name}! Tu pedido ha sido procesado. Total: $${updated?.total ?? purchase.total}`);
      this.router.navigate(['/']);
      return;
    }

    alert('No hay nada para comprar.');
  }
}
