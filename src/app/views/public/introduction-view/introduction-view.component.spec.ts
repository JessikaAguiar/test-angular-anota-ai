import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionViewComponent } from './introduction-view.component';

describe('IntroductionViewComponent', () => {
  let component: IntroductionViewComponent;
  let fixture: ComponentFixture<IntroductionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroductionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
