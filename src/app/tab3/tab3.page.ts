import { Component } from '@angular/core';
 
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  num: string ="";
  salida: string = "";
  factorial(){
    var fact=1;
    var i=1;
    for (i=1; i<=parseInt(this.num);i++)
      fact=fact*i;
    this.salida="El factorial es "+fact;
  }
  primo(){
    if (parseInt(this.num)==0)
      this.salida="El número "+this.num+" es par";
    else
    this.salida="El número "+this.num+" es impar";
  }
  constructor() {}
 
}