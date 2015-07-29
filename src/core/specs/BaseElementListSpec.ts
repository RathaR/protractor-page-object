describe('Test suite for BaseElementList class', () => {
    beforeEach(() => {
        browser.get('https://angular-ui.github.io/bootstrap/');
    });
    it('should get elements list with get locator', () => {
        var list = new Core.BaseElementList<Core.BaseElement>({
            locator: by.css('body > div:nth-child(3) > div > div > div'),
            context: null
        }, {
            locator: by.css('section'),
            constructor : Core.BaseElement
        });
        expect(list.all().isDisplayed()).toBeTruthy();
    });

    it('should get typed list get', () => {
        var list = new Core.BaseElementList<Core.BaseElement>({
            locator: by.css('body > div:nth-child(3) > div > div > div'),
            context: null
        }, {
            locator: by.css('section'),
            constructor: Core.BaseElement
        });
        expect(list.get(1).element().isDisplayed()).toBeTruthy();
    });

    it('should get typed list get from array', () => {
        var list = new Core.BaseElementList<Core.TestElement>({
            locator: by.css('body > div:nth-child(3) > div > div > div'),
            context: null
        }, {
            locator: by.css('section'),
            constructor: Core.TestElement
        });
        var arr = list.toArray();
        arr.then((arr) => {
            arr.forEach((finder) => {
                expect(finder.isPresent()).toBeTruthy();
            });
        });
    });
});