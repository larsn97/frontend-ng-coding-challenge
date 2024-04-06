import { TestBed } from '@angular/core/testing';

import { SignupcService } from './signupc.service';

describe('SignupcService', () => {
  let service: SignupcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
