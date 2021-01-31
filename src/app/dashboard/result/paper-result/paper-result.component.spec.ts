import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperResultComponent } from './paper-result.component';

describe('PaperResultComponent', () => {
  let component: PaperResultComponent;
  let fixture: ComponentFixture<PaperResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
