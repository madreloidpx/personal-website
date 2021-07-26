import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../_model/portfolio';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', '../app.component.css']
})
export class ArticlesComponent implements OnInit {
  portfolio: Portfolio[] = [];

	constructor() { 
		this.portfolio.push({
			title: "Test Title 1",
			short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			preview_image: "../../assets/placeholder.png",
			url: null
		}) 
		this.portfolio.push({
			title: "Test Title 2",
			short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			preview_image: "../../assets/placeholder.png",
			url: null
		})
		this.portfolio.push({
			title: "Test Title 3",
			short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			preview_image: "../../assets/placeholder.png",
			url: null
		}) 
		this.portfolio.push({
			title: "Test Title 4",
			short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla.",
			preview_image: "../../assets/placeholder.png",
			url: null
		})
	}

  ngOnInit(): void {
  }

}
