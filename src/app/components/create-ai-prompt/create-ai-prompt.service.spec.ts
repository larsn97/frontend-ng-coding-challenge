import { TestBed } from '@angular/core/testing';

import { CreateAiPromptService } from './create-ai-prompt.service';

describe('CreateAiPromptService', () => {
  let service: CreateAiPromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAiPromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
