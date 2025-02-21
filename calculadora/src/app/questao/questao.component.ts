import { Component, Input, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-questao',
  imports: [FormsModule],
  templateUrl: './questao.component.html',
  styleUrl: './questao.component.css',
  standalone: true
})
export class QuestaoComponent implements OnInit{
  @Input() operador: string = '+'
  field1: number;
  field2: number;

 resposta: number | null;

  constructor(){
    this.field1 = Math.floor(Math.random() * 9) +1;
    this.field2 = Math.floor(Math.random() * 9) +1;
    this.resposta = null;

  }

  ngOnInit(): void {
   
  }

}
