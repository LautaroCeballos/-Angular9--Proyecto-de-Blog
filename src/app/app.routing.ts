// Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Impotar componentes a los cuales quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent} from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { SearchComponent } from './components/search/search.component';

// Definir el array de rutas
const appRoutes: Routes = [
	{path: '',  component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'blog', component: BlogComponent},
	{path: 'blog/articulo/:id', component: ArticleComponent},
	{path: 'blog/crear', component: ArticleNewComponent},
	{path: 'blog/editar/:id', component: ArticleEditComponent},
	{path: 'buscar/:search', component: SearchComponent},
	{path: 'formulario', component: FormularioComponent},
	{path: 'pagina-de-pruebas', component: PaginaComponent}, //Pagina de pruebas con Parametro opcional
	{path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent}, //Parametro Obligatorio
	{path: 'peliculas', component: PeliculasComponent},
	{path: '**', component: ErrorComponent} //Cuando la ruta no existe carga el componente
];

// Exportar el modulo de rutas

export const appRoutingProviders: any[] =[]; //Servicio
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes); //Carga el modulo de rutas y hace que exista
