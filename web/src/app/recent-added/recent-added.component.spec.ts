import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAddedComponent } from './recent-added.component';

describe('RecentAddedComponent', () => {
  let component: RecentAddedComponent;
  let fixture: ComponentFixture<RecentAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
