import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloworld/helloworld.component'
import { Minhapagina } from './minhapagina/minhapagina'

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, Minhapagina],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
