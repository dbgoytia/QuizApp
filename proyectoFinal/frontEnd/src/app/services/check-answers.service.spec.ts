import { TestBed } from '@angular/core/testing';

import { CheckAnswersService } from './check-answers.service';

describe('CheckAnswersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckAnswersService = TestBed.get(CheckAnswersService);
    expect(service).toBeTruthy();
  });
});
