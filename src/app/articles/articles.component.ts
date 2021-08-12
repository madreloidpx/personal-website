import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../_model/portfolio';
import ArticleData from '../../assets/data/articles.json';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', '../app.component.css']
})
export class ArticlesComponent implements OnInit {
  portfolio: Portfolio[] = [];

	constructor() { 
		ArticleData.data.forEach(item => {
			this.portfolio.push(item);
		});
	}

  ngOnInit(): void {
  }

}
