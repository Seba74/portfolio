import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DesktopLayoutComponent } from './layouts/desktop-layout/desktop-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DesktopLayoutComponent, HomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
