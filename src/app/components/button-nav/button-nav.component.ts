import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface ButtonData {
  description: string;
  href: string;
  hover: string;
  active: string;
}

@Component({
  selector: 'app-button-nav',
  standalone: true,
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss'],
  imports: [CommonModule],
})
export class ButtonNavComponent {
  @ViewChild('img', { static: false }) img!: ElementRef;
  @Input() buttonData!: ButtonData;
  @Output() activeEvent: EventEmitter<this> = new EventEmitter<this>();

  isActive: boolean = false;

  onClick() {
    this.isActive = !this.isActive;
    this.activeEvent.emit(this);

    if (this.isActive) {
      this.img.nativeElement.src = this.buttonData.active;
    } else {
      this.img.nativeElement.src = this.buttonData.href;
    }
  }

  onMouseEnter() {
    if (!this.isActive) {
      this.img.nativeElement.src = this.buttonData.hover;
    }
  }

  onMouseLeave() {
    if (!this.isActive) {
      this.img.nativeElement.src = this.buttonData.href;
    }
  }
}
