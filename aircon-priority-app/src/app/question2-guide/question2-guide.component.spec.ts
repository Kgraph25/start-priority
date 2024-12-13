import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2GuideComponent } from './question2-guide.component';

describe('Question2GuideComponent', () => {
  let component: Question2GuideComponent;
  let fixture: ComponentFixture<Question2GuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question2GuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question2GuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
