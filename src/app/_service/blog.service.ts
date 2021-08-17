import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',  })
};
@Injectable({
  providedIn: 'root'
})
export class BlogService {
    private APIURL = "https://api.github.com/repos/madreloidpx/madreloidpx.github.io/issues"
    constructor(private http: HttpClient){}

    getArticles(){
        return this.http.get<any>(`${this.APIURL}`, httpOptions);
    }

    getArticleByIssue(issue_no: number){
        return this.http.get<any>(`${this.APIURL}/${issue_no}`, httpOptions)
    }
}