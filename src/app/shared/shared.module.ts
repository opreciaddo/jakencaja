import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FootModalComponent } from './footer/foot-modal/foot-modal.component';
import { WhatsappBtnComponent } from './whatsapp-btn/whatsapp-btn.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FootModalComponent,
    WhatsappBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    WhatsappBtnComponent
  ]
})
export class SharedModule { }
