import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '../pages/main/main-page.component';
import { RegisterComponent } from '../pages/register/register-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AdvertComponent } from '../pages/advert/advert.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AdvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
