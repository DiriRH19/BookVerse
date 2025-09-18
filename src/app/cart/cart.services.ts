import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_KEY = 'bookverse-cart';
  private readonly PURCHASES_KEY = 'bookverse-purchases';
  
  private items = signal<any[]>([]);
  private purchases = signal<any[]>([]);

  private cartCount = computed(() =>
    this.items().reduce((sum, item) => sum + (item.quantity || 1), 0)
  );

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const cartData = localStorage.getItem(this.CART_KEY);
    const purchasesData = localStorage.getItem(this.PURCHASES_KEY);
    
    if (cartData) {
      this.items.set(JSON.parse(cartData));
    }
    
    if (purchasesData) {
      this.purchases.set(JSON.parse(purchasesData));
    }
  }

  private saveToStorage() {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.items()));
    localStorage.setItem(this.PURCHASES_KEY, JSON.stringify(this.purchases()));
  }

  addToCart(book: any) {
    const currentItems = this.items();
    const existingItem = currentItems.find((item: any) => item.id === book.id);
    
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      const safeBook = {
        id: book.id,
        title: book.title ?? 'Sin título',
        author: book.author ?? 'Desconocido',
        image: book.image ?? 'assets/placeholder.png',
        price: book.price ?? 0,
        quantity: 1
      };
      currentItems.push(safeBook);
    }
    
    this.items.set([...currentItems]);
    this.saveToStorage();
  }

  removeFromCart(id: number) {
    const currentItems = this.items();
    const idx = currentItems.findIndex((i: any) => i.id === id);
    if (idx === -1) return;

    const item = currentItems[idx];
    if ((item.quantity || 1) > 1) {
      item.quantity = (item.quantity || 1) - 1;
      this.items.set([...currentItems]);
    } else {
      const filtered = currentItems.filter((i: any) => i.id !== id);
      this.items.set(filtered);
    }
    this.saveToStorage();
  }

  updateQuantity(id: number, quantity: number) {
    const currentItems = this.items();
    const item = currentItems.find((i: any) => i.id === id);
    if (item) {
      if (quantity <= 0) {
        const filtered = currentItems.filter((i: any) => i.id !== id);
        this.items.set(filtered);
      } else {
        item.quantity = quantity;
        this.items.set([...currentItems]);
      }
      this.saveToStorage();
    }
  }

  getItems() {
    return this.items.asReadonly();
  }

  purchaseItem(id: number) {
    const currentItems = this.items();
    const item = currentItems.find((i: any) => i.id === id);
    if (!item) return null;

    const purchase = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: [{ ...item }],
      total: (item.price || 0) * (item.quantity || 1)
    };

    this.purchases.set([...this.purchases(), purchase]);
    const filtered = currentItems.filter((i: any) => i.id !== id);
    this.items.set(filtered);
    this.saveToStorage();
    return purchase;
  }

  completePurchase() {
    const currentItems = this.items();
    if (currentItems.length === 0) return null;

    const purchase = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: [...currentItems],
      total: this.getTotal()
    };

    this.purchases.set([...this.purchases(), purchase]);
    this.items.set([]);
    this.saveToStorage();
    return purchase;
  }

  getPurchases() {
    return this.purchases.asReadonly();
  }

  getTotal(): number {
    return this.items().reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  }

  clearCart() {
    this.items.set([]);
    this.saveToStorage();
  }

  getCartCount() {
    return this.cartCount;
  }

  attachBuyerToPurchase(purchaseId: number, buyer: { name: string; email: string; address: string; paymentMethod: string; }) {
    const current = this.purchases();
    const updated = current.map((p: any) => {
      if (p.id === purchaseId) {
        return { ...p, buyer };
      }
      return p;
    });
    this.purchases.set(updated);
    this.saveToStorage();
    return updated.find((p: any) => p.id === purchaseId) || null;
  }
}
