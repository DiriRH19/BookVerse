import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [Nav, Footer, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  protected showFullContent = signal(false);

  protected toggleContent() {
    this.showFullContent.set(!this.showFullContent());
  }

  protected readonly teamMembers = [
    {
      name: 'María González',
      role: 'CEO y Fundadora',
      description: 'Apasionada por la literatura desde pequeña, María fundó BookVerse con la visión de democratizar el acceso a los libros.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CTO',
      description: 'Experto en tecnología con más de 10 años desarrollando plataformas e-commerce para el sector editorial.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ana Martínez',
      role: 'Directora de Contenidos',
      description: 'Editora profesional con amplia experiencia en la industria del libro y curadora de nuestra selección.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David López',
      role: 'Diseñador UX/UI',
      description: 'Especialista en experiencia de usuario, responsable de hacer que BookVerse sea intuitivo y hermoso.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  protected readonly milestones = [
    { year: '2020', title: 'Fundación', description: 'BookVerse nace con la misión de revolucionar la compra de libros online.' },
    { year: '2021', title: 'Primer millón', description: 'Alcanzamos nuestro primer millón de libros vendidos.' },
    { year: '2022', title: 'Expansión', description: 'Lanzamos nuestra plataforma móvil y expandimos a 15 países.' },
    { year: '2023', title: 'IA y Recomendaciones', description: 'Implementamos inteligencia artificial para recomendaciones personalizadas.' },
    { year: '2024', title: 'Sostenibilidad', description: 'Compromiso con la sostenibilidad: 100% empaques reciclables.' }
  ];

  protected readonly values = [
    {
      icon: '📚',
      title: 'Pasión por la Lectura',
      description: 'Creemos que cada libro tiene el poder de transformar vidas y expandir horizontes.'
    },
    {
      icon: '🤝',
      title: 'Confianza',
      description: 'Construimos relaciones duraderas con nuestros clientes a través de la transparencia y honestidad.'
    },
    {
      icon: '🌱',
      title: 'Sostenibilidad',
      description: 'Nos comprometemos con prácticas eco-amigables y el apoyo a editoriales independientes.'
    },
    {
      icon: '💡',
      title: 'Innovación',
      description: 'Utilizamos tecnología de vanguardia para mejorar constantemente la experiencia del usuario.'
    }
  ];
}
