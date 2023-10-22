import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

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
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [NgFor, NgClass],
})
export class CardComponent {
  @ViewChild('img', { static: true }) img!: ElementRef;
  @Input() cardData!: CardData;
  ASSET_LINK: string = '../../../assets/techs/';

  isHover() {
    if (!this.cardData.isActive) return;
    this.img.nativeElement.src = '../../../assets/techs/share.svg';
  }

  isOut() {
    this.img.nativeElement.src = '../../../assets/techs/share-inactive.svg';
  }

  handleButtonClick(){
    window.open(this.cardData.href, '_blank');
  }

}
