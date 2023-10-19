import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';

@Component({
  selector: 'app-desktop-layout',
  standalone: true,
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.scss'],
  imports: [ RouterOutlet,  SidenavComponent]
})
export class DesktopLayoutComponent {

}
