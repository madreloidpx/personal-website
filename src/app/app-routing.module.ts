import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { BlogSiteComponent } from './blog-site/blog-site.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { ArticleResolver } from './_resolver/article.resolver';
import { BlogResolver } from './_resolver/blog.resolver';

const routes: Routes = [
	{
		path: "blog", component: BlogSiteComponent, resolve: { articles: BlogResolver }
	},
	{
		path: "blog/:id", component: BlogArticleComponent, resolve: { article: ArticleResolver }
	},
	{
		path: "", pathMatch: "full", component: MainSiteComponent
	},
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
