import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from 'src/app/website/interfaces/productos.interface';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {

  productos: Producto[] = this.prodService.data.productos;

  constructor( private prodService: ProductosService ) {}
}
