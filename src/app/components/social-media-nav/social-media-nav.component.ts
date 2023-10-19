import { Component, Input } from '@angular/core';

interface SocialMedia {
  icon: string;
  href: string;
}

@Component({
  selector: 'app-social-media-nav',
  standalone: true,
  templateUrl: './social-media-nav.component.html',
  styleUrls: ['./social-media-nav.component.scss']
})
export class SocialMediaNavComponent {
  @Input() socialMedia!: SocialMedia;
}
