import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInfluencersComponent } from './view-influencers.component';

describe('ViewInfluencersComponent', () => {
  let component: ViewInfluencersComponent;
  let fixture: ComponentFixture<ViewInfluencersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInfluencersComponent]
    });
    fixture = TestBed.createComponent(ViewInfluencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
