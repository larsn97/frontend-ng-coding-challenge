import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupcComponent } from './signupc.component';

describe('SignupcComponent', () => {
  let component: SignupcComponent;
  let fixture: ComponentFixture<SignupcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
