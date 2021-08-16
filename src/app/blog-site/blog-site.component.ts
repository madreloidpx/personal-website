import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-blog-site',
  templateUrl: './blog-site.component.html',
  styleUrls: ['./blog-site.component.css']
})
export class BlogSiteComponent implements OnInit {
  articles

  constructor(private route: ActivatedRoute) { 
    this.route.data.subscribe(data => this.articles = data)
  }

  ngOnInit(): void {
    console.log(this.articles)
  }

}
