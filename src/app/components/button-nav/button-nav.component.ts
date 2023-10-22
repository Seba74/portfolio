import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  effect,
} from '@angular/core';
import { NgClass } from '@angular/common';

interface ButtonData {
  description: string;
  href: string;
  normal: string;
  hover: string;
  active: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-button-nav',
  standalone: true,
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss'],
  imports: [NgClass],
})
export class ButtonNavComponent implements OnInit {
  @ViewChild('img', { static: true }) img!: ElementRef;
  @Input() buttonData!: ButtonData;
  @Output() activeEvent: EventEmitter<this> = new EventEmitter<this>();
  isActive: boolean = false;

  ngOnInit(): void {
    if (this.buttonData.isActive) {
      this.isActive = true;
      this.img.nativeElement.src = this.buttonData.active;
    }
  }
  
  onMouseEnter() {
    if (!this.isActive) {
      this.img.nativeElement.src = this.buttonData.hover;
    }
  }

  onMouseLeave() {
    if (!this.isActive) {
      this.img.nativeElement.src = this.buttonData.normal;
    }
  }
}
