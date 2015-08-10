//xdescribe('Test/demo suite for BaseElement class', () => {
//    beforeEach(() => {
//        browser.get('https://angular-ui.github.io/bootstrap/');
//    });
//
//    /**
//     * for creating new Core.BaseElement instance you must pass IElementLocator to Core.BaseElement constructor
//     */
//    describe('BaseElement constructing', () => {
//        /**
//         * if context === null, element will be created in page body context
//         */
//        it('should create element with context === null', () => {
//            var el = new Core.BaseElement({locator: by.css('body'), context: null});
//            expect(el.element().isPresent()).toBeTruthy();
//        });
//
//        it('should create element by locator and context', () => {
//            var el = new Core.BaseElement({locator: by.css('#overview > div:nth-child(1) > h1'), context: element(by.css('body'))});
//            expect(el.element().isPresent()).toBeTruthy();
//        });
//
//
//    });
//
//    it('should get sub-element of element without context', () => {
//        var el = new Core.BaseElement({locator: by.css('body'), context: null});
//        expect(el.element(by.css('a')).isPresent()).toBeTruthy();
//    });
//
//    it('should get element without locator', () => {
//        var context = element(by.css('body'));
//        var el = new Core.BaseElement({context: context});
//        expect(el.element().isPresent()).toBeTruthy();
//    });
//
//    it('should get sub-element of element without locator', () => {
//        var context = element(by.css('body'));
//        var el = new Core.BaseElement({context: context});
//        expect(el.element(by.css('a')).isPresent()).toBeTruthy();
//    });
//
//    it('should get element with locator and context', () => {
//        var context = element(by.css('body'));
//        var el = new Core.BaseElement({context: context, locator: by.css('a')});
//        expect(el.element().isPresent()).toBeTruthy();
//    });
//
//    it('should get sub-element of element with locator and context', () => {
//        var context = element(by.css('body'));
//        var el = new Core.BaseElement({context: context, locator: by.css('[role=main]')});
//        expect(el.element(by.css('p')).isPresent()).toBeTruthy();
//    });
//});