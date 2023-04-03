import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { SustainabilityComponent } from './components/sustainability/sustainability.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path:"sustainability",
    component:SustainabilityComponent
  },
  {
    path:"catalogue",
    component:CatalogueComponent
  },
  {
    path:"certificates",
    component:CertificatesComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
