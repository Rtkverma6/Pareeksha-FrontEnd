import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChoicesComponent } from './add-choices.component';

describe('AddChoicesComponent', () => {
  let component: AddChoicesComponent;
  let fixture: ComponentFixture<AddChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
