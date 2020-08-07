import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponeComponent } from './nav-bar-compone.component';

describe('NavBarComponeComponent', () => {
  let component: NavBarComponeComponent;
  let fixture: ComponentFixture<NavBarComponeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
