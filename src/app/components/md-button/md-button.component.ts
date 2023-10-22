import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-md-button',
  standalone: true,
  templateUrl: './md-button.component.html',
  styleUrls: ['./md-button.component.scss'],
})
export class MdButtonComponent {
  @Input() text: string = '';
}
