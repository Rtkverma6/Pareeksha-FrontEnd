import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersetterDashboardComponent } from './papersetter-dashboard.component';

describe('PapersetterDashboardComponent', () => {
  let component: PapersetterDashboardComponent;
  let fixture: ComponentFixture<PapersetterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapersetterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersetterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
