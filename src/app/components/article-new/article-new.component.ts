import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ ArticleService ]
})
export class ArticleNewComponent implements OnInit {

	public article: Article;
	public status: string;
	public page_title: string;
	public isEdit: boolean;
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
		this.page_title = 'Crear Articulo';
		this.isEdit = false;
		this.urlApi = Global.urlApi;
	}

	ngOnInit(): void {
	}

	onSubmit(){
		this.article.image = this.imageName;
		this._articleService.create(this.article).subscribe(
			response => {
				if(response.status == 'success'){
					this.status = 'success';
					this.article = response.article;

					//Alerta
					swal(
						'Articulo creado!!',
						'El articulo se ha creado correctamente',
						'success'
					);

					this._router.navigate(['/blog']);
				}
			},
			error => {
				console.log(error);
				this.status = 'error';
			}
		);
	}

	imageUpload(data){
		this.imageName = JSON.parse(JSON.stringify(data.body.image));
	}

}
