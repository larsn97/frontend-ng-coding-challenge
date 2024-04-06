import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypromptsComponent } from './myprompts.component';

describe('MypromptsComponent', () => {
  let component: MypromptsComponent;
  let fixture: ComponentFixture<MypromptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MypromptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MypromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
