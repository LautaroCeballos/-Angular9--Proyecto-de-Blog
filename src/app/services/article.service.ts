import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Global } from '../services/global';

//HttpClient : Libreria necesaria para hacer peticiones ajax al backend
//HttpHeaders : Permite manipular las peticiones ajax con mayor facilidad y enviar mas datos
//Observable: Lo vamos a necesitar para recojer los datos que devuelve el backend

@Injectable()
export class ArticleService {

	public urlApi: string;

	constructor(
		private _http: HttpClient //!important: Para poder utilizar esto hay que cargar el httpClient Module en app.module y luego cargarlo en los imports
	){
		this.urlApi = Global.urlApi;
	}

	pruebas(){
		return "Soy el servicio de articulos";
	}

	//Es muy importante especificar el tipo de dato que va a devolver la funcion ajax (Observable<any>)
	getArticles(last:any = null):Observable<any>{ //Parametro opcional
		var articles = 'articles';

		if(last != null){ //Para que devuelva solo los ultimos articulos(Revisar el controller article en el backend)
			articles = 'articles/true';
		}

		return this._http.get(this.urlApi + articles);
	}

	getArticle(articleId):Observable<any>{
		return this._http.get(this.urlApi + 'article/' + articleId);
	}

	search(searchString):Observable<any>{
		return this._http.get(this.urlApi + 'search/' + searchString);
	}

	create(article):Observable<any>{
		//Vamos a convertir el objeto literal article a un objeto de tipo json para asi poderlo enviar correctamente al backend
		let params = JSON.stringify(article);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.urlApi + 'save', params, {headers: headers});
	}

	update(id, article):Observable<any>{
		let params = JSON.stringify(article);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.urlApi + 'article/' + id, params, {headers: headers});
	}

	delete(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.urlApi + 'article/' + id, {headers: headers});
	}
}