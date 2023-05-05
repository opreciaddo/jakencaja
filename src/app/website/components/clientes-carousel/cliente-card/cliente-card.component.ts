import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/website/interfaces/productos.interface';

@Component({
  selector: 'app-cliente-card',
  templateUrl: './cliente-card.component.html',
  styleUrls: ['./cliente-card.component.scss']
})
export class ClienteCardComponent {

  @Input() cliente!: Cliente;
}
