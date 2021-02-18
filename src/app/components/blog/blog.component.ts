import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ ArticleService ]
})
export class BlogComponent implements OnInit {

	public articles: Article[];
	public urlApi: string;


  	constructor(
  		private _articleService: ArticleService
  	) { 
  		this.urlApi = Global.urlApi;
  	}

  	ngOnInit(): void {
  	//el metodo getArticles() pertenece a un observable y permite subscribirse para recibir los datos que vienen por get (en este caso)
  		this._articleService.getArticles().subscribe(
	  		response => {
	  			if(response.articles){
	  				this.articles = response.articles;
	  			} else {
	  				console.log("Error al devolver los articulos");
	  			}
	  		},
	  		error => {
	  			console.log(error);
	  		}
  		);
	}

}
