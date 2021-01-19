import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperLoginComponent } from './paper-login.component';

describe('PaperLoginComponent', () => {
  let component: PaperLoginComponent;
  let fixture: ComponentFixture<PaperLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
