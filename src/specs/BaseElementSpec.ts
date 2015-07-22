xdescribe('Test suite for BaseElement class', () => {
    beforeEach(() => {
        browser.get('https://angular-ui.github.io/bootstrap/');
    });

    it('should get element without context', () => {
        var el = new Core.BaseElement({locator: by.css('body'), context: null});
        expect(el.element().isPresent()).toBeTruthy();
    });

    it('should get sub-element of element without context', () => {
        var el = new Core.BaseElement({locator: by.css('body'), context: null});
        expect(el.element(by.css('a')).isPresent()).toBeTruthy();
    });

    it('should get element without locator', () => {
        var context = new Core.BaseElement({locator: by.css('body'), context: null});
        var el = new Core.BaseElement({context: context});
        expect(el.element().isPresent()).toBeTruthy();
    });

    it('should get sub-element of element without locator', () => {
        var context = new Core.BaseElement({locator: by.css('body'), context: null});
        var el = new Core.BaseElement({context: context});
        expect(el.element(by.css('a')).isPresent()).toBeTruthy();
    });

    it('should get element with locator and context', () => {
        var context = new Core.BaseElement({locator: by.css('body'), context: null});
        var el = new Core.BaseElement({context: context, locator: by.css('a')});
        expect(el.element().isPresent()).toBeTruthy();
    });

    it('should get sub-element of element with locator and context', () => {
        var context = new Core.BaseElement({locator: by.css('body'), context: null});
        var el = new Core.BaseElement({context: context, locator: by.css('[role=main]')});
        expect(el.element(by.css('p')).isPresent()).toBeTruthy();
    });
});