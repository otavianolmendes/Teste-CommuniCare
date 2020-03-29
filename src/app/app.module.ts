import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './src/app/header/header.component';
import { Section1Component } from './src/app/section1/section1.component';
import { Section2Component } from './src/app/section2/section2.component';
import { FooterComponent } from './src/app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
