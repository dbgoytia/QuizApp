import { TestBed } from '@angular/core/testing';

import { GetScoreboardService } from './get-scoreboard.service';

describe('GetScoreboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetScoreboardService = TestBed.get(GetScoreboardService);
    expect(service).toBeTruthy();
  });
});
