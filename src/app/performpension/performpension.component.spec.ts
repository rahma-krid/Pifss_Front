import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformpensionComponent } from './performpension.component';

describe('PerformpensionComponent', () => {
  let component: PerformpensionComponent;
  let fixture: ComponentFixture<PerformpensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformpensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformpensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
