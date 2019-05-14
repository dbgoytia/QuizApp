import { async, TestBed } from '@angular/core/testing';
import { QuestionnaireComponent } from './questionnaire.component';
describe('QuestionnaireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [QuestionnaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(QuestionnaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=questionnaire.component.spec.js.map