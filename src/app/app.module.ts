import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Section1Component } from './components/home/section1/section1.component';
import { SustainabilityComponent } from './components/sustainability/sustainability.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    HeaderComponent,
    FooterComponent,
    CatalogueComponent,
    Section1Component,
    SustainabilityComponent,
    CertificatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
