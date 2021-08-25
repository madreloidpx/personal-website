import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Article } from '../_model/article';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogArticleComponent implements OnInit {
    article: Article

    constructor(private route: ActivatedRoute) { 
        this.route.data.subscribe(data => {
            const article = data["article"]
            const user = article["user"]
            console.log("data", article)
            console.log("user", user)
            console.log(this.bodyParse(article["body"]))
            let articleObj: Article = {
                url: article["url"],
                issue_no: article["number"],
                comments_url: article["comments_url"],
                title: article["title"],
                author: user["login"],
                content_body: this.bodyParse(article["body"]),
                created_at: new Date (article["created_at"]),
                is_owner: article["author_association"] == "OWNER",
            }
            this.article = articleObj
        })
    }

    ngOnInit(): void {
        console.log(this.article)
    }

    bodyParse(text) {
        let data = text.split('\r\n')
        let newData = ""
        data.forEach(line => {
            let changed = false
            if(line.includes("###")){
                line = "<h3>" + line.substring(4) + "</h3>"
                changed = true
            } else if(line.includes("![image]")){
                line = "<img class='blogimg' src='" + line.slice(0, -1).substring(9) + "' />"
                changed = true
            }
            if (changed == false){
                line = "<p>" + line + "</p>"
            }
            if(line.includes("](") && !line.includes("![image]")){
                let temp = line.split("](")
                let firstHalf = temp[0].split("[")
                let secondHalf = temp[1].split(")")
                let urltxt = firstHalf[1]
                let url = secondHalf[0]
                line = firstHalf[0] + "<a href='" + url + "'>" + urltxt + "</a>" + secondHalf[1]
            }
            newData = newData + line
        });
        return newData
    }
}