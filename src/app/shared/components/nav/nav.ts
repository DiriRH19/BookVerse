import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  
  protected isDarkMode = this.themeService.isDarkMode;
  protected cartCount = this.cartService.getCartCount();

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}
