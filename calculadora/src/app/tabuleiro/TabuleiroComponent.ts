import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';


@Component({
  selector: 'app-tabuleiro',
  imports: [FormularioComponent],
  templateUrl: './tabuleiro.component.html',
  styleUrl: './tabuleiro.component.css',
  standalone: true
})
export class TabuleiroComponent {
}
