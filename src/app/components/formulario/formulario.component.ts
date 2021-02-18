import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

//Paso importante para que funcionen los formularios en angular hay que cargar el modulo nuevo de form en el app.module.ts
//Luego hay que vincular el formulario con un evento (ngSubmit)="onSubmit"
//Vamos a poner un nombre al formulario de html para poder conectarlo con el codigo del componente y asi llenar el objeto user #userForm="ngForm"
//Luego los inputs deben tener nombres de angular que coincidan con el objeto que buscan llenar

export class FormularioComponent implements OnInit {
	public user: any;

  constructor() { 
  	this.user = {
  		nombre: '',
  		apellido: '',
  		bio: '',
  		genero: '' 
  	}
  }

  ngOnInit(): void {
  }

  onSubmit(){
  	alert("Formulario Enviado");
  	console.log(this.user);
  }

}
