import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {
  base: number = 0;
  exponente: number = 0;
  resultado: number | null = null;

  calcularPotencia() {
    this.resultado = Math.pow(this.base, this.exponente);
  }
}
