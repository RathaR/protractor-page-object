///<reference path="../BaseElement.ts" />
///<reference path="../IElementLocator.ts" />

describe('Test/demo suite for BaseElement class', () => {

    beforeEach(() => {
        browser.get('http://localhost:63342/protractor-page-object-2/index.html#/docs');
    });

    /**
     * for creating new Core.BaseElement instance you must pass IElementLocator to Core.BaseElement constructor
     */
    describe('Element ', () => {

        it('should create element by locator', () => {
            var el = new Core.BaseElement(by.css('#class-search'));
            expect(el.element().isDisplayed()).toBeTruthy();
        });

        it('should create element by IElementLocator', () => {
            var el = new Core.BaseElement({locator: by.css('#class-search'), context: element(by.css('body'))});
            expect(el.element().isDisplayed()).toBeTruthy();
        });

        it('should create element by ElementFinder', () => {
            var el = new Core.BaseElement(element(by.css('#class-search')));
            expect(el.element().isDisplayed()).toBeTruthy();
        });

        it('should get sub-element of element created by IElementLocator', ()=> {
            var el = new Core.BaseElement({
                locator: by.css('[ng-controller="DocsController"]'),
                context: element(by.css('body'))
            });
            expect(el.element(by.css('#class-search')).isDisplayed()).toBeTruthy();
        });

        it('should get sub-element of element created by protractor.ElementFinder', () => {
            var el = new Core.BaseElement(element(by.css('body')));
            expect(el.element(by.css('#class-search')).isDisplayed()).toBeTruthy();
        });

        it('should get sub-element of element created by webdriver.Locator', () => {
            var el = new Core.BaseElement(by.css('body'));
            expect(el.element(by.css('#class-search')).isDisplayed()).toBeTruthy();
        });
    });


    describe('Elements list', () => {
        it('should create list of elements ', () => {
            var listRootLocator = {
                locator: by.css('[ng-controller="DocsController"]'),
                context: element(by.css('body'))
            };
            var list = new Core.BaseElementList<Core.BaseElement>(listRootLocator, Core.BaseElement, by.css('[ng-repeat="module in modules"]'));
            expect(list.isDisplayed()).toBeTruthy();
            expect(list.all().count()).toEqual(4);
        });
    });

    //it('should get sub-element of element without context', () => {
    //    var el = new Core.BaseElement({locator: by.css('body'), context: null});
    //    expect(el.element(by.css('a')).isPresent()).toBeTruthy();
    //});
    //
    //it('should get element without locator', () => {
    //    var context = element(by.css('body'));
    //    var el = new Core.BaseElement({context: context});
    //    expect(el.element().isPresent()).toBeTruthy();
    //});
    //
    //it('should get sub-element of element without locator', () => {
    //    var context = element(by.css('body'));
    //    var el = new Core.BaseElement({context: context});
    //    expect(el.element(by.css('a')).isPresent()).toBeTruthy();
    //});
    //
    //it('should get element with locator and context', () => {
    //    var context = element(by.css('body'));
    //    var el = new Core.BaseElement({context: context, locator: by.css('a')});
    //    expect(el.element().isPresent()).toBeTruthy();
    //});
    //
    //it('should get sub-element of element with locator and context', () => {
    //    var context = element(by.css('body'));
    //    var el = new Core.BaseElement({context: context, locator: by.css('[role=main]')});
    //    expect(el.element(by.css('p')).isPresent()).toBeTruthy();
    //});
});