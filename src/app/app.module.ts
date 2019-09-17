import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { HomeComponent } from './home/home.component';
import { FootterComponent } from './footter/footter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    HomeComponent,
    FootterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
