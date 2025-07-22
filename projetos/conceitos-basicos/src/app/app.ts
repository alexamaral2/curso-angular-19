import { Component, signal } from '@angular/core';
import { ListaCompras } from './lista-compras/lista-compras'

@Component({
  selector: 'app-root',
  imports: [ ListaCompras ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
