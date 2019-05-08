import { TestBed } from '@angular/core/testing';

import { SendSmsService } from './send-sms.service';

describe('SendSmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendSmsService = TestBed.get(SendSmsService);
    expect(service).toBeTruthy();
  });
});
