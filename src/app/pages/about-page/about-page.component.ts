import { Component } from '@angular/core';
import { MdButtonComponent } from 'src/app/components/md-button/md-button.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  imports: [MdButtonComponent]
})
export class AboutPageComponent {
  href: string = '../../../assets/cv/seb-guevara.pdf'
  download: string = 'Sebastian_Guevara_CV.pdf'
}
