import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DesktopLayoutComponent } from './layouts/desktop-layout/desktop-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { MobileLayoutComponent } from './layouts/mobile-layout/mobile-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DesktopLayoutComponent, MobileLayoutComponent, HomePageComponent, AboutPageComponent, WorksPageComponent, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
