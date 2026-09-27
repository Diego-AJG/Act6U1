import { Component } from '@angular/core';
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  num1: string = "";
  num2: string = "";
  resultado: number = 0;
 
  sumar(){
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }
  restar(){
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }
  multiplicar(){
    this.resultado=parseInt(this.num1)*parseInt(this.num2);    
  }
  dividir(){
    if (parseInt(this.num2)!=0){
      this.resultado=parseInt(this.num1)/parseInt(this.num2);
    }
    else{
      alert("No se puede ejecutar la división por cero")
    }
     }
  constructor() {}
 
}
 