import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

//Hay que importar el servicio desde el componente donde se quieren llamar los metodos (peliculas.component.ts)
//Incluirlo en el providers dentro del @Component que utiliza el servicio (peliculas.component.ts)
//creamos un nuevo parametro: private _peliculaService: PeliculaService dentro del constructor del componente (Siempre se acostumbra bautizar a los servicios con _nombredelservicio)


@Injectable()
export class PeliculaService{

	public peliculas:Pelicula[];

	constructor(){
		this.peliculas = [
			new Pelicula("Spiderman 4", 2010, 'https://pm1.narvii.com/7215/c89b7a2a4a5a007dccad49426d9f88f84e1a7373r1-1365-2048v2_hq.jpg'),
			new Pelicula("Los vengadores Endgame", 2007, 'https://as01.epimg.net/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg'),
			new Pelicula("Batman vs Superman", 2020, 'https://www.infobae.com/new-resizer/8WmKw_KWnwePDlDHzACinVXT90Y=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/H6GH3SV7CFFNNGKITJDEVE3XMY'),
			new Pelicula("Spiderman 3", 2031, 'https://www.infobae.com/new-resizer/8WmKw_KWnwePDlDHzACinVXT90Y=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/H6GH3SV7CFFNNGKITJDEVE3XMY')
		];
	}

	holaMundo(){
		return 'Hola Mundo desde un servicio de Angular';
	}

	getPeliculas(){
		return this.peliculas;
	}
}