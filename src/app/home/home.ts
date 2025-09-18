import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Banner } from '../banner/banner';
import { BookList } from '../book-list/book-list';
import { Catalog } from '../catalog/catalog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Nav, Footer, Banner, BookList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featuredBooks = [
    {
      title: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985764/elprincipito_xpebz5.png',
      rating: 4.8,
    },
    {
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985764/cienan%CC%83osdesoledad_taglxv.png',
      rating: 4.9,
    },
    {
      title: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes',
      image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985766/quijotedelamancha_h0t6k8.png',
      rating: 4.7,
    },
    {
      title: 'La sombra del viento',
      author: 'Carlos Ruiz Zafón',
      image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985765/lasombradelviento_ka4imk.png',
      rating: 4.6,
    },
  ].map((book, index) => ({ ...book, id: index + 1 }));
}
