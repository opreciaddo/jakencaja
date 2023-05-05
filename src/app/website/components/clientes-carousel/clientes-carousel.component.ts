import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Cliente } from 'src/app/website/interfaces/productos.interface';

@Component({
  selector: 'app-clientes-carousel',
  templateUrl: './clientes-carousel.component.html',
  styleUrls: ['./clientes-carousel.component.scss']
})
export class ClientesCarouselComponent {
  
  clientes: Cliente[] = this.prodService.data.clientes;

  constructor( private prodService: ProductosService ) {}
}
