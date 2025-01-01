import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DniComponent } from './contact/dni/dni.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // formularios de tipo plantilla
    ReactiveFormsModule, // formularios de tipo reactivos
    HttpClientModule, // para hacer peticiones http
    ProductDetailComponent, // Importar el componente standalone aquí
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), // Configura HttpClient para usar fetch
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
