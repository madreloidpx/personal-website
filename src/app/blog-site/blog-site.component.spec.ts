import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSiteComponent } from './blog-site.component';

describe('BlogSiteComponent', () => {
  let component: BlogSiteComponent;
  let fixture: ComponentFixture<BlogSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
