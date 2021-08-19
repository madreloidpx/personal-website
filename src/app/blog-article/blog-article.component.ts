import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Article } from '../_model/article';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent implements OnInit {
    article: Article

    constructor(private route: ActivatedRoute) { 
        this.route.data.subscribe(data => {
            const article = data["article"]
            const user = article["user"]
            console.log("data", article)
            console.log("user", user)
            let articleObj: Article = {
                url: article["url"],
                issue_no: article["number"],
                comments_url: article["comments_url"],
                title: article["title"],
                author: user["login"],
                content_body: article["body"],
                created_at: new Date (article["created_at"]),
                is_owner: article["author_association"] == "OWNER",
            }
            this.article = articleObj
        })
    }

    ngOnInit(): void {
        console.log(this.article)
    }
}