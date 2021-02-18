import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import swal from 'sweetalert';


@Component({
  selector: 'app-article-edit',
  //Aca usamos la vista de otro componente para reutilizar codigo
  templateUrl: '../article-new/article-new.component.html', 
  styleUrls: ['./article-edit.component.css'],
  providers: [ ArticleService ]
})
export class ArticleEditComponent implements OnInit {

	public article: Article;
	public status: string;
	public isEdit: boolean;
	public page_title: string;
	public urlApi: string;

	private imageName: string;

	afuConfig = {
	    multiple: false,
	    formatsAllowed: ".jpg, .png, .gif, .jpeg",
	    maxSize: "20",
	    uploadAPI:  {
	      url: Global.urlApi + 'upload-image'
	    },
	    theme: "attachPin",
	    hideProgressBar: true,
	    hideResetBtn: true,
	    hideSelectBtn: false,
	    replaceTexts: {
	      selectFileBtn: 'Select Files',
	      resetBtn: 'Reset',
	      uploadBtn: 'Upload',
	      dragNDropBox: 'Drag N Drop',
	      attachPinBtn: 'Sube tu imagen para el articulo',
	      afterUploadMsg_success: 'Successfully Uploaded !',
	      afterUploadMsg_error: 'Upload Failed !'
	    }
	};

	constructor(
		private _articleService: ArticleService,
		private _route: ActivatedRoute,
		private _router: Router
	) { 
		this.article = new Article('', '', '', null, null);
		this.isEdit = true;
		this.page_title = 'Editar Articulo';
		this.urlApi = Global.urlApi;
	}

	ngOnInit(): void {
		this.getArticle();
	}

	onSubmit(){
		this.article.image = this.imageName;
		this._articleService.update(this.article._id, this.article).subscribe(
			response => {
				if(response.status == 'success'){
					this.status = 'success';
					this.article = response.article;

					swal(
						'Articulo editado!!',
						'El articulo se ha editado con exito',
						'success'
					);

					this._router.navigate(['/blog/articulo', this.article._id]);
				}
			},
			error => {
				console.log(error);
				this.status = 'error';
				swal(
					'Edicion Fallida',
					'El articulo se ha no editado',
					'error'
				);
			}
		);
	}

	imageUpload(data){
		this.imageName = JSON.parse(JSON.stringify(data.body.image));
	}

	getArticle(){
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

}
