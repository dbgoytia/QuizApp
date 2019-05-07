import { TestBed } from '@angular/core/testing';
import { PlayersNameService } from './players-name.service';
describe('PlayersNameService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PlayersNameService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=players-name.service.spec.js.map