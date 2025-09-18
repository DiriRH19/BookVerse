import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { BookDetail } from './book-detail/book-detail';
import { Cart } from './cart/cart';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Purchase } from './purchase/purchase';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'catalogo', component: Catalog },
    { path: 'book-detail/:id', component: BookDetail },
    { path: 'cart', component: Cart },
    { path: 'purchase', component: Purchase },
    { path: 'about', component: About },
    { path: 'profile', component: Profile }
];
