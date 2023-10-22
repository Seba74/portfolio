import {
  Component,
  HostListener,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { ButtonNavComponent } from 'src/app/components/button-nav/button-nav.component';
import { SocialMediaNavComponent } from 'src/app/components/social-media-nav/social-media-nav.component';

interface ButtonData {
  description: string;
  href: string;
  normal: string;
  hover: string;
  active: string;
  isActive?: boolean;
}

interface SocialMedia {
  icon: string;
  href: string;
}

@Component({
  selector: 'app-mobile-layout',
  standalone: true,
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.scss'],
  imports: [
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    NgClass,
    ButtonNavComponent,
    SocialMediaNavComponent,
  ],
})
export class MobileLayoutComponent {
  private sectionIds: string[] = ['seb', 'about', 'works'];
  @ViewChildren('button') buttons!: ButtonNavComponent[];
  @ViewChild('nav') nav!: any;
  buttonsData: ButtonData[] = [
    {
      description: 'Seb Guevara',
      href: '#seb',
      normal: '../../assets/icons/logo.svg',
      hover: '../../assets/icons/logo.svg',
      active: '../../assets/icons/logo.svg',
      isActive: true,
    },
    {
      description: 'About',
      href: '#about',
      normal: '../../assets/icons/about.svg',
      hover: '../../assets/icons/about-stroke.svg',
      active: '../../assets/icons/about-active.svg',
    },
    {
      description: 'Works',
      href: '#works',
      normal: '../../assets/icons/works.svg',
      hover: '../../assets/icons/works-stroke.svg',
      active: '../../assets/icons/works-active.svg',
    },
  ];

  socialMedias: SocialMedia[] = [
    {
      icon: '../../assets/icons/linkedin.svg',
      href: 'https://www.linkedin.com/in/sebastian-guevara-1535b7183/',
    },
    {
      icon: '../../assets/icons/github.svg',
      href: 'https://github.com/Seba74',
    },
    {
      icon: '../../assets/icons/email.svg',
      href: 'mailto:jseb.guevara@gmail.com?subject=Contact%20from%20website',
    },
  ];

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentSection = this.determineActiveSection();
    this.toggleActiveClass(currentSection);
  }

  private determineActiveSection(): string {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop || 0;

    for (let i = 0; i < this.sectionIds.length; i++) {
      const section = document.getElementById(this.sectionIds[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          return this.sectionIds[i];
        }
      }
    }
    return this.sectionIds[0];
  }

  private toggleActiveClass(activeSectionId: string): void {
    this.buttons.forEach((button) => {
      if (button.buttonData.href === `#${activeSectionId}`) {
        this.activeButton(button);
      }
    });
  }

  activeButton(buttonActive: ButtonNavComponent) {
    this.buttons.forEach((button) => {
      if (button !== buttonActive) {
        button.isActive = false;
        button.img.nativeElement.src = button.buttonData.normal;
      } else {
        button.isActive = true;
        button.img.nativeElement.src = button.buttonData.active;
      }
    });
  }
}
