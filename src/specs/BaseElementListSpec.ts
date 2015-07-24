describe('Test suite for BaseElementList class', () => {
    beforeEach(() => {
        browser.get('https://angular-ui.github.io/bootstrap/');
    });
    it('should get elements list with item locator', () => {
        var list: Core.BaseElementList<Core.BaseElement> = new Core.BaseElementList({
            locator: by.css('body > div:nth-child(3) > div > div > div'),
            context: null
        }, {locator: by.css('section')});
        expect(list.all().isDisplayed()).toBeTruthy();
    });

    it('should get typed list item', () => {
        var list = new Core.BaseElementList({
            locator: by.css('body > div:nth-child(3) > div > div > div'),
            context: null
        }, {
            locator: by.css('section')
        });
        expect(list.item(1).element().isDisplayed()).toBeTruthy();
    });

    it('should get typed list item from array', () => {
        var list = new Core.BaseElementList<Core.BaseElement>({
            locator: by.css('body > div:nth-child(3) > div > div > div'),
            context: null
        }, {
            locator: by.css('section')
        });
        var arr = list.toArray();
        arr.then((arr) => {
            arr.forEach((finder) => {
                expect(finder.isPresent()).toBeTruthy();
            });
        });
    });
});