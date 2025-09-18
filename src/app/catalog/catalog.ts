import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { BookCard } from '../book-card/book-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, Nav, Footer, BookCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
books = [
  {
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985764/elprincipito_xpebz5.png',
    rating: 4.8,
    price: 35000
  },
  {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985764/cienan%CC%83osdesoledad_taglxv.png',
    rating: 4.9,
    price: 145000
  },
  {
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985766/quijotedelamancha_h0t6k8.png',
    rating: 4.7,
    price: 109000
  },
  {
    title: 'La sombra del viento',
    author: 'Carlos Ruiz Zafón',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985765/lasombradelviento_ka4imk.png',
    rating: 4.6,
    price: 109150
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985765/fahrenheit451_gdravm.png',
    rating: 4.5,
    price: 45000
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985763/1984_evycp7.png',
    rating: 4.9,
    price: 30000
  },
  {
    title: 'Crónica de una muerte anunciada',
    author: 'Gabriel García Márquez',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985764/cronicadeunamuerteanunciada_dggwia.png',
    rating: 4.7,
    price: 55000
  },
  {
    title: 'Rayuela',
    author: 'Julio Cortázar',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985765/rayuela_ft0obj.png',
    rating: 4.4,
    price: 85000
  },
  {
    title: 'La casa de los espíritus',
    author: 'Isabel Allende',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985765/lacasadelosespiritus_ynlp6d.png',
    rating: 4.6,
    price: 70000
  },
  {
    title: 'Orgullo y prejuicio',
    author: 'Jane Austen',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985766/orgulloyprejuicio_jzr0om.png',
    rating: 4.8,
    price: 40000
  },
  {
    title: 'Los miserables',
    author: 'Victor Hugo',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985763/losmiserables_tbj2ho.png',
    rating: 4.9,
    price: 120000
  },
  {
    title: 'Drácula',
    author: 'Bram Stoker',
    image: 'https://res.cloudinary.com/dgaxlowpd/image/upload/v1757985764/dracula_kdm0ne.png',
    rating: 4.5,
    price: 45000
  }
].map((book, index) => ({ ...book, id: index + 1 }));

}