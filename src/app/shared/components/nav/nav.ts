import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CartService } from '../../../cart/cart.services';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class Nav {
  private themeService = inject(ThemeService);
  private cartService = inject(CartService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  
  protected isDarkMode = this.themeService.isDarkMode;
  protected cartCount = this.cartService.getCartCount();

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }

  isOnCatalog(): boolean {
    return this.router.url.startsWith('/catalogo');
  }

  getQuery(): string {
    return this.route.snapshot.queryParamMap.get('q') ?? '';
  }

  onSearchInput(value: string) {
    if (!this.isOnCatalog()) return;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: value || null },
      queryParamsHandling: 'merge'
    });
  }
}
