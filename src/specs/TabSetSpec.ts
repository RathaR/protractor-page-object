xdescribe('TabSet specs', () => {
    beforeEach(() => {
        browser.get('https://angular-ui.github.io/bootstrap/');
    });
    it('should create TabSet with typed header and content', () => {

        var tabset = new UIBootstrap.TabSet<Core.BaseElement, Core.BaseElement>({
            context: element(by.css('body')),
            locator: by.css('#tabs > div:nth-child(2) > div.col-md-6.show-grid > div > div:nth-child(5)')
        }, Core.BaseElement, Core.BaseElement);

        expect(tabset.content().isDisplayed()).toBeTruthy();
        expect(tabset.content().getText()).toEqual('Static content');
        expect(tabset.heading().get(0).isDisplayed()).toBeTruthy();
    });
});