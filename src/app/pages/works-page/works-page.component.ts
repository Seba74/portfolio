import { Component } from '@angular/core';
import { CardsGridComponent } from 'src/app/components/cards-grid/cards-grid.component';

@Component({
  selector: 'app-works-page',
  standalone: true,
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss'],
  imports: [CardsGridComponent]
})
export class WorksPageComponent {

}
