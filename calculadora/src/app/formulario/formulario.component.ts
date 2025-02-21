import { Component, OnInit } from '@angular/core';
import { QuestaoComponent } from '../questao/questao.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [QuestaoComponent, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  standalone: true
})
export class FormularioComponent implements OnInit{
questoes: { operador:string}[] = [
  {operador: '+'}

]

constructor(){}


  ngOnInit(): void {

  }

}
