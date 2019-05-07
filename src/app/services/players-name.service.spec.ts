import { TestBed } from '@angular/core/testing';

import { PlayersNameService } from './players-name.service';

describe('PlayersNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayersNameService = TestBed.get(PlayersNameService);
    expect(service).toBeTruthy();
  });
});
