import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../_service/blog.service';

@Injectable()
export class BlogResolver implements Resolve<Object> {

  constructor(private blogService: BlogService){}

  resolve(route: ActivatedRouteSnapshot): Observable<Object>{
    return this.blogService.getArticles();
  }
}