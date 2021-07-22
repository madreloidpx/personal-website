import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSiteComponent } from './blog-site/blog-site.component';
import { MainSiteComponent } from './main-site/main-site.component';

const routes: Routes = [
	{
		path: "blog", component: BlogSiteComponent
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
