import { Component, Input } from '@angular/core';
import { Example } from 'src/app/website/interfaces/productos.interface';

@Component({
  selector: 'app-prod-modal',
  templateUrl: './prod-modal.component.html',
  styleUrls: ['./prod-modal.component.scss']
})
export class ProdModalComponent {

  @Input() idModal!: number;
  @Input() examples!: Example[];
}
