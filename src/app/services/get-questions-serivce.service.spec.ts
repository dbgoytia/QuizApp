import { TestBed } from '@angular/core/testing';

import { GetQuestionsSerivceService } from './get-questions-serivce.service';

describe('GetQuestionsSerivceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQuestionsSerivceService = TestBed.get(GetQuestionsSerivceService);
    expect(service).toBeTruthy();
  });
});
