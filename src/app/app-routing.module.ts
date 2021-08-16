import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSiteComponent } from './blog-site/blog-site.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { BlogResolver } from './_resolver/blog.resolver';

const routes: Routes = [
	{
		path: "blog", component: BlogSiteComponent, resolve: { articles: BlogResolver }
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
