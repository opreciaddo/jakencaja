import { Component, Input } from '@angular/core';
import { Example } from 'src/app/website/interfaces/productos.interface';

@Component({
  selector: 'app-productos-card',
  templateUrl: './productos-card.component.html',
  styleUrls: ['./productos-card.component.scss']
})
export class ProductosCardComponent {

  @Input() id!: number;
  @Input() picture!: string;
  @Input() title!: string;
  @Input() desc!: string;
  @Input() examples!: Example[];
}
