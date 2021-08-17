import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Article } from '../_model/article';

@Component({
  selector: 'app-blog-site',
  templateUrl: './blog-site.component.html',
  styleUrls: ['./blog-site.component.css']
})
export class BlogSiteComponent implements OnInit {
  articles: Article[]

  constructor(private route: ActivatedRoute) { 
    this.route.data.subscribe(data => {
      let articleList: Article[] = []
      const articles = data["articles"]
      for(let i = 0; i < articles.length; i++){
        const article = articles[i]
        const user = article["user"]
        console.log("data", article)
        console.log("user", user)
        let articleObj: Article = {
          url: article["url"],
          comments_url: article["comments_url"],
          title: article["title"],
          author: user["login"],
          content_body: article["body"],
          created_at: article["created_at"],
        }
        articleList.push(articleObj)
      }
      this.articles = articleList
    })
  }

  ngOnInit(): void {
    console.log(this.articles)
  }

}
