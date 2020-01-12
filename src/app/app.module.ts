import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    StatusSliderComponent,
    HeroListPageComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
