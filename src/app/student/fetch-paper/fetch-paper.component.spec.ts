import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPaperComponent } from './fetch-paper.component';

describe('FetchPaperComponent', () => {
  let component: FetchPaperComponent;
  let fixture: ComponentFixture<FetchPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
