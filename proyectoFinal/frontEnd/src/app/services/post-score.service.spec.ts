import { TestBed } from '@angular/core/testing';

import { PostScoreService } from './post-score.service';

describe('PostScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostScoreService = TestBed.get(PostScoreService);
    expect(service).toBeTruthy();
  });
});
