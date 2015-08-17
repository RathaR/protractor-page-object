///<reference path="../BaseElement.ts" />

describe('Test/demo suite for BaseElement class', () => {

    beforeEach(() => {
        browser.get('http://rathar.github.io/protractor-page-object/#/docs');
    });

    describe('Element class', () => {
        describe('constructor', () => {
            var ctorParams = [{
                text: 'webdriver.Locator',
                value: by.css('#class-search')
            }, {
                text: 'IElementLocator',
                value: {locator: by.css('#class-search'), context: element(by.css('body'))}
            }, {
                text: 'ElementFinder',
                value: element(by.css('#class-search'))
            }];
            ctorParams.forEach((param)=> {
                it('should create element by ' + param.text, () => {
                    var el = new Core.BaseElement(param.value);
                    expect(el).toBeDefined();
                });
            });
        });

        describe('element() method', () => {
            var ctorParams = [{
                text: 'webdriver.Locator',
                value: by.css('#class-search')
            }, {
                text: 'IElementLocator',
                value: {locator: by.css('#class-search'), context: element(by.css('body'))}
            }, {
                text: 'ElementFinder',
                value: element(by.css('#class-search'))
            }];
            var subLocator = by.css('input');
            ctorParams.forEach((param)=> {
                it('should get sub-element for elements created by ' + param.text, () => {
                    var el = new Core.BaseElement(param.value);
                    expect(el.element(subLocator).isDisplayed()).toBeTruthy();
                });

                it('should get protractor.ElementFinder for elements created by' + param.text, () => {
                    var el = new Core.BaseElement(param.value);
                    expect(el.element().isDisplayed()).toBeTruthy();
                    expect(el.element().getText()).toEqual('Search:');
                });
            });
        });
    });
});