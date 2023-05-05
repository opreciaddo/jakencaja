import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections/sections.component';
import { WebsiteComponent } from './website.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { NosotrosCardComponent } from './components/nosotros-card/nosotros-card.component';
import { ProductosCardComponent } from './components/productos-card/productos-card.component';
import { ProdModalComponent } from './components/productos-card/prod-modal/prod-modal.component';
import { ProdCardComponent } from './components/productos-card/prod-modal/prod-card/prod-card.component';
import { ClientesCarouselComponent } from './components/clientes-carousel/clientes-carousel.component';
import { ClienteCardComponent } from './components/clientes-carousel/cliente-card/cliente-card.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContModalComponent } from './components/contacto-form/cont-modal/cont-modal.component';



@NgModule({
  declarations: [
    SectionsComponent,
    WebsiteComponent,
    HeroCardComponent,
    NosotrosCardComponent,
    ProductosCardComponent,
    ProdModalComponent,
    ProdCardComponent,
    ClientesCarouselComponent,
    ClienteCardComponent,
    ContactoFormComponent,
    ContModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    WebsiteComponent
  ]
})
export class WebsiteModule { }
