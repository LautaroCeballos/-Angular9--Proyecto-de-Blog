import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [ PeliculaService ]
})
export class PeliculasComponent implements OnInit {

//	public peliculas: Array<any>; //Array con cualquier tipo de dato dentro
	
	public peliculas: Pelicula[];
//	public peliculas: Array<Pelicula>;

	public favorita: Pelicula;

	constructor(
			private _peliculaService: PeliculaService
		) {
		
		this.peliculas = this._peliculaService.getPeliculas();


		// this.peliculas = [
		// 	{year: 2010, title: 'Spiderman 4', image: 'https://pm1.narvii.com/7215/c89b7a2a4a5a007dccad49426d9f88f84e1a7373r1-1365-2048v2_hq.jpg'},
		// 	{year: 2007, title: 'Los vengadores Endgame', image: 'https://as01.epimg.net/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg'},
		// 	{year: 2020, title: 'Batman vs Superman', image: 'https://www.infobae.com/new-resizer/8WmKw_KWnwePDlDHzACinVXT90Y=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/H6GH3SV7CFFNNGKITJDEVE3XMY'},
		// 	{year: 2031, title: 'Batman vs Superman 2', image: 'https://www.infobae.com/new-resizer/8WmKw_KWnwePDlDHzACinVXT90Y=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/H6GH3SV7CFFNNGKITJDEVE3XMY'}
		// ];
	}

	ngOnInit(): void {
		// console.log(this.peliculas);
		console.log(this._peliculaService.holaMundo());
	}

	mostrarFavorita(event){
		this.favorita = event.pelicula;
	}
}
