import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent
  implements OnInit, OnDestroy {
  ancho = 200;
  alto = 200;
  total: number;
  totalSuma = 0;
  totalResta =0;
  totalMultiplicacion=0;
  totalDivision=0;
/*
  @Input()
  total1:number;
  @Input()
  total2:number;
  @Input()
  total3:number;
  @Input()
  total4:number;
*/
  @Input()
  titulo: string;

  @Input()
  imagen: string;

 numeroA:number;
 numeroB:number;


  @Input()
  textoImagen: string;

  @Input()
  textoBoton: string;

  @Output()
  public a = new EventEmitter<number>();

  @Output()
  public b = new EventEmitter<number>();
  


  @Output()// Evento
  public cambioSueldo = new EventEmitter();
  
  
  constructor() {
    console.log('Instanciando')
  }

  ngOnInit(): void { // La clase está lista
    console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  }

  ngOnDestroy(): void { //la clase esta destruida
  }

  saludar(){
alert("HOLAAAAAAAAAAAAAAAAAAAAAAAA..................")

  }

  aumentarSueldo(){
    //this.textoBoton = this.textoBoton + 1;
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
    this.ancho = this.ancho + 20;
    this.alto = this.alto + 20;
    //this.textoBoton = (+this.textoBoton +1).toString();
  }

  disminuirImagen(){
    this.ancho = this.ancho -20;
    this.alto = this.alto -20;
  }

  
  getNumberA(a,){
    if(a.srcElement.value.isBlank){
      this.numeroA = 0;
    }
    this.numeroA= Number(a.srcElement.value)
    console.log(this.numeroA)
    
  }
  getNumberB(b){
    if(b.srcElement.value.isBlank){
      this.numeroB = 0;
    }
    this.numeroB= Number(b.srcElement.value);
    console.log(this.numeroB)
  }

  Operar(numeroA,numeroB){
    console.log(numeroA,numeroB)
    this.totalSuma = this.numeroA + this.numeroB;
    this.totalResta = this.numeroA - this.numeroB;
    this.totalMultiplicacion= this.numeroA * this.numeroB;
    this.totalDivision = this.numeroA / this.numeroB;
    this.total = this.numeroA+this.numeroB ;
    console.log(this.total)
  }

  restar(a: number, b: number){
    this.total= a-b
  }
  multiplicar(a: number, b: number){
    this.total= a*b
  }
  dividir(a: number, b: number){
    if(b===0){
      alert("no puedes dividir por cero")
    }
    this.total= a/b

  }

}

