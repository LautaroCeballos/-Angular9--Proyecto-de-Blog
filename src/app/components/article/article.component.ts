import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from '../../services/global';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ ArticleService ]
})
export class ArticleComponent implements OnInit {

	public article: Article;
	public urlApi: string;

	constructor( //Se recomienda que la visibilidad siempre se mantengan en privado
		private _articleService: ArticleService, 
		private _route: ActivatedRoute,
		private _router: Router
	) {
		this.urlApi = Global.urlApi;
	}

	ngOnInit(): void {
		this._route.params.subscribe(params => {
			let id = params['id'];
			
			this._articleService.getArticle(id).subscribe(
				response => {
					if(response.article){
						this.article = response.article;
					} else {
						this._router.navigate(['/error']);
					}
				},
				error => {
					console.log(error);
					this._router.navigate(['/error']);
				}
			);
		});
	}

	delete(id){

		swal({
		  title: "¿Estas seguro?",
		  text: "Una vez borrado no podras recuperarlo",
		  icon: "warning",
		  buttons: [true, true],
		  dangerMode: true
		})
		.then((willDelete) => {
			if(willDelete){
				this._articleService.delete(id).subscribe(
					response => {
						swal("Poof! El articulo ha sido borrado", {
					      icon: "success",
					    });
						this._router.navigate(['/blog']);
					},
					error => {
						console.log(error);
						this._router.navigate(['/error']);
					}
				);
			} else {
		    	swal("Tu articulo esta ha salvo!");
		  	}
		});

		
	}
}
