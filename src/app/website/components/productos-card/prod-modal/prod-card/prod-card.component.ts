import { Component, Input } from '@angular/core';
import { Example } from 'src/app/website/interfaces/productos.interface';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent {

  @Input() example!: Example;
}
