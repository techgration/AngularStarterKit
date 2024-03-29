import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdministrationComponent } from './useradministration.component';

describe('UserAdministrationComponent', () => {
  let component: UserAdministrationComponent;
  let fixture: ComponentFixture<UserAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAdministrationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
