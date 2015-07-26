describe('AngularStrap modal specs', () => {
    var modalBtn, modal : AngularStrap.Modal<Core.BaseElement>;
    beforeEach(()=> {
        browser.get('http://mgcrea.github.io/angular-strap/');
        modalBtn = element(by.css('#directives > div:nth-child(1) > div > div.bs-example > button.btn.btn-lg.btn-primary'));
        modalBtn.click();
        modal = new AngularStrap.Modal<Core.BaseElement>({
            locator: by.css('.modal-dialog'),
            context: element(by.css('body'))
        }, Core.BaseElement);
    });

    it('should create modal with typed content', () => {
        expect(modal.isDisplayed()).toBeTruthy();
        expect(modal.content.isDisplayed()).toBeTruthy();
    });
});