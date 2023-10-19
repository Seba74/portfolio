import { Component, ElementRef, ViewChildren } from '@angular/core';
import { ButtonNavComponent } from '../button-nav/button-nav.component';
import { CommonModule } from '@angular/common';
import { SocialMediaNavComponent } from '../social-media-nav/social-media-nav.component';

interface ButtonData {
  description: string;
  href: string;
  hover: string;
  active: string;
  isActive?: boolean;
}

interface SocialMedia {
  icon: string;
  href: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [ButtonNavComponent, SocialMediaNavComponent, CommonModule],
})
export class SidenavComponent {
  @ViewChildren('button') buttons!: ButtonNavComponent[];

  buttonsData: ButtonData[] = [
    {
      description: 'Seb Guevara',
      href: '../../assets/icons/logo.svg',
      hover: '../../assets/icons/logo.svg',
      active: '../../assets/icons/logo.svg',
      isActive: true,
    },
    {
      description: 'About',
      href: '../../assets/icons/about.svg',
      hover: '../../assets/icons/about-stroke.svg',
      active: '../../assets/icons/about-active.svg',
    },
    {
      description: 'Works',
      href: '../../assets/icons/works.svg',
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

  activeButton(buttonActive: ButtonNavComponent) {
    this.buttons.forEach((button) => {
      if (button !== buttonActive) {
        button.isActive = false;
        button.img.nativeElement.src = button.buttonData.href;
      }else{
        button.isActive = true;
        button.img.nativeElement.src = button.buttonData.active;
      }
    });
  }
}
