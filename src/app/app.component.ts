import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo:String; //Atributos de tipo String
  usuario:String;

  numero1:number; //Atributos de tipo number
  numero2:number;
  resultado:number;

  constructor() { //Se le dan valores a los atributos

    this.titulo = "Calculadora";
    this.usuario = "Ezequiel";

    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  calcular(select:HTMLSelectElement) { //Función que calcula la operación entre dos números. La operación es sacada del valor del select

    switch (select.value) { //En cada caso se define el valor del atributo resultado en base al resultado de la operación
      case "suma":
        this.resultado = this.numero1+this.numero2;
        break;
      case "resta":
        this.resultado = this.numero1-this.numero2;
        break;
      case "multiplicación":
        this.resultado = this.numero1*this.numero2;
        break;
      case "división":
        this.resultado = this.numero1/this.numero2;
        break;
      default:
      this.resultado = 80;
    }
  }
}
