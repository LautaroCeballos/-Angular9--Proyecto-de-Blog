import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router' //Para recibir parametros por url

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

public nombre: string;
public apellido: string;

constructor(
  	private _route: ActivatedRoute, //Modulos y servicios necesarios para recibir parametros por url
  	private _router: Router
) {}

//Angular trabaja siempre con observables, miran una respuesta de un servicio(Asincrono o no) (suscribe)

  ngOnInit(): void {

  	this._route.params.subscribe((params: Params) => {
  		this.nombre = params.nombre;
  		this.apellido = params.apellido;
  	});
  }

  redireccion(){ //Redirigir al usuario de una pagina a otra usando RouterNavigate
  	this._router.navigate(['/formulario'])
  }

  redAndParams(){ //navigator pasando parametros
  	this._router.navigate(['/pagina-de-pruebas', 'Lautaro', 'Ceballos']);
  }

}
