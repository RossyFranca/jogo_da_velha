import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabuleiroComponent } from './tabuleiro/TabuleiroComponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabuleiroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,

})
export class AppComponent {
  title = 'calculadora';
}
