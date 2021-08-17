import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { BlogSiteComponent } from './blog-site/blog-site.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { VerticalCardComponent } from './vertical-card/vertical-card.component';
import { HorizontalCardComponent } from './horizontal-card/horizontal-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogService } from './_service/blog.service';

import { BlogResolver } from './_resolver/blog.resolver';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { ArticleResolver } from './_resolver/article.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    MainSiteComponent,
    BlogSiteComponent,
    BlogArticleComponent,
    PortfolioComponent,
    AboutComponent,
    ArticlesComponent,
    ContactComponent,
    VerticalCardComponent,
    HorizontalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    BlogService,
    BlogResolver,
    ArticleResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
