import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAiPromptComponent } from './create-ai-prompt.component';

describe('CreateAiPromptComponent', () => {
  let component: CreateAiPromptComponent;
  let fixture: ComponentFixture<CreateAiPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAiPromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAiPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
