import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAttributeValueRecommendationComponent } from './StandardAttributeValueRecommendation.component';

describe('StandardAttributeValueRecommendationComponent', () => {
  let component: StandardAttributeValueRecommendationComponent;
  let fixture: ComponentFixture<StandardAttributeValueRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StandardAttributeValueRecommendationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAttributeValueRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
