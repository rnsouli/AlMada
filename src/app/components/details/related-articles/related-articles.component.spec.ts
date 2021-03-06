import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedArticlesComponent } from './related-articles.component';

describe('RelatedArticlesComponent', () => {
  let component: RelatedArticlesComponent;
  let fixture: ComponentFixture<RelatedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
