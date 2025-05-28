import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOfPageComponent } from './call-of-page.component';

describe('CallOfPageComponent', () => {
  let component: CallOfPageComponent;
  let fixture: ComponentFixture<CallOfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallOfPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
