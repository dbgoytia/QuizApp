import { TestBed } from '@angular/core/testing';
import { SendSmsService } from './send-sms.service';
describe('SendSmsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SendSmsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=send-sms.service.spec.js.map