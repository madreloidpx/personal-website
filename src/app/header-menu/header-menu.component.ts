import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css', '../app.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
