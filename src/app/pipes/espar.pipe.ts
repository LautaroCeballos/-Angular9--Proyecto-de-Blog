import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'espar'
})
export class EsParPipe implements PipeTransform{
	transform(value: any){
		var espar = "no es par";
		if(value % 2 == 0)
			espar = "es par";

		return "El años es: " + value + " y " + espar;
	}
}

//Hay que cargar la pipe personalizada dentro del app.module importandolo y en el array de declarations

/*
	import { EsParPipe } from './pipes/espar.pipe';
  	@NgModule({
		declarations: [ EsParPipe ];
  	})
*/