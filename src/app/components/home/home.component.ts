import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ArticleService ]
})
export class HomeComponent implements OnInit {

	public title: string;
	public articles: Article[];

	constructor(
		private _articleService: ArticleService
	) { 
		this.title = "Ultimos articulos";
	}

  	ngOnInit(): void {
  		//el metodo getArticles() pertenece a un observable y permite subscribirse para recibir los datos que vienen por get (en este caso)
  		this._articleService.getArticles(true).subscribe(
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
