describe('AngularStrap modal specs', () => {

    beforeEach(()=> {
        browser.get('http://mgcrea.github.io/angular-strap/');
    });

    it('should create modal with typed content', () => {
        var modalBtn = element(by.css('#directives > div:nth-child(1) > div > div.bs-example > button.btn.btn-lg.btn-primary'));
        modalBtn.click();
        var modal = new AngularStrap.Modal<Core.BaseElement>({
            locator: by.css('.modal-dialog'),
            context: element(by.css('body'))
        }, Core.BaseElement);
        expect(modal.isDisplayed()).toBeTruthy();
    });
});