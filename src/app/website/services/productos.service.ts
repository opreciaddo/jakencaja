import { Injectable } from '@angular/core';
import * as productos from '../../../assets/dataBase/db.json';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  data = productos;

  constructor() {}
}
