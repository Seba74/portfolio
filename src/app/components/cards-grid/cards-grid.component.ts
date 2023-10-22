import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

interface CardData {
  title: string;
  description: string;
  href: string;
  img: string;
  alt: string;
  techs: string[];
  isActive?: boolean;
}

@Component({
  selector: 'app-cards-grid',
  standalone: true,
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss'],
  imports: [CardComponent, NgFor],
})
export class CardsGridComponent {
  ASSET_LINK: string = '../../../assets';
  GITHUB_LINK: string = 'https://github.com/Seba74';
  cards: CardData[] = [
    {
      title: 'Tasky App',
      description:
        'Intuitive task management app enhancing productivity. Users effortlessly create, manage tasks, accessing them anywhere.',
      href: `${this.GITHUB_LINK}/task-app`,
      img: `${this.ASSET_LINK}/works/tasky.webp`,
      alt: 'Tasky App',
      techs: ['angular', 'redux', 'ionic', 'nodejs', 'mongo', 'docker'],
      isActive: true,
    },
    {
      title: 'Photo View App',
      description:
        'Seamlessly share photos, location, and messages with loved ones. Securely save memories and revisit them later.',
      href: `${this.GITHUB_LINK}/photoview-frontend`,
      img: `${this.ASSET_LINK}/works/photoapp.webp`,
      alt: 'Photo View App',
      techs: ['angular', 'ionic', 'nodejs', 'mongo', 'figma'],
      isActive: true,
    },
    {
      title: `What's new app`,
      description: `Explore and stay up to date with the latest releases and dive deep into each film's details.`,
      href: `${this.GITHUB_LINK}/movie-up-to-date`,
      img: `${this.ASSET_LINK}/works/moview.webp`,
      alt: "What's new app",
      techs: ['angular', 'ionic', 'nodejs', 'mongo', 'figma'],
      isActive: true,
    },
    {
      title: 'Dayflow App',
      description:
        'An application that enables users to create a personalized business. Users can customize and add products/services',
      href: `not-available`,
      img: `${this.ASSET_LINK}/works/dayflow.webp`,
      alt: 'Dayflow App',
      techs: ['angular', 'net', 'redux', 'firebase', 'docker'],
      isActive: false,
    },
    {
      title: 'Coffee Store',
      description:
        'Indulge in a world of coffee delights this web coffee store, find a diverse selection of premium coffee.',
      href: `${this.GITHUB_LINK}/coffee-store`,
      img: `${this.ASSET_LINK}/works/coffee.webp`,
      alt: 'Coffee Store',
      techs: ['php', 'sql', 'csharp', 'js', 'figma'],
      isActive: true,
    },
    {
      title: 'Stock Management',
      description:
        'Manage your stock and sales with this Desktop application. It allows you to manage your products and customers.',
      href: `${this.GITHUB_LINK}/CorazonDeCafe`,
      img: `${this.ASSET_LINK}/works/stock.webp`,
      alt: 'Stock Management',
      techs: ['csharp', 'net', 'sql', 'figma'],
      isActive: true,
    },
  ];
}
