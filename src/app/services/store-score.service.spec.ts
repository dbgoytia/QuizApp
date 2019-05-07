import { TestBed } from '@angular/core/testing';

import { StoreScoreService } from './store-score.service';

describe('StoreScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreScoreService = TestBed.get(StoreScoreService);
    expect(service).toBeTruthy();
  });
});
