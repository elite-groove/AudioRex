import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMediaTypeComponent } from './choose-media-type.component';

describe('ChooseMediaTypeComponent', () => {
  let component: ChooseMediaTypeComponent;
  let fixture: ComponentFixture<ChooseMediaTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseMediaTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMediaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
