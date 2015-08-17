///<reference path="../typings/tsd.d.ts"/>

module Core {

    export interface IElementLocator {
        context : protractor.ElementFinder,
        locator : webdriver.Locator
    }

    export interface IElementConstructor<T> {
        new(locator: (IElementLocator | webdriver.Locator | protractor.ElementFinder), ...args: any[]): T
    }
    export var create = <TObject>(ctorFn: IElementConstructor<TObject>,
                                  locator: protractor.ElementFinder,
                                  ctorParams: any[] = []): TObject => {
        var obj = Object.create(ctorFn.prototype);
        ctorParams.unshift(locator);
        ctorFn.apply(obj, ctorParams);
        return <TObject> obj;
    };

    /**
     * A BaseElement class is a wrapper around protractor.ElementFinder
     * and provide base functionality for all elements of application
     */
    export class BaseElement {

        protected locator: any;//(IElementLocator | webdriver.Locator | protractor.ElementFinder);

        isDisplayed() {
            return this.element().isDisplayed();
        }

        isPresent() {
            return this.element().isPresent();
        }

        getText() {
            return this.element().getText();
        }

        click() {
            return this.element().click();
        }

        element(sublocator?: webdriver.Locator): protractor.ElementFinder {
            var contextElement;
            var ownLocator = this.locator;
            if(ownLocator.context && ownLocator.locator) {
                contextElement = ownLocator.context.element(ownLocator.locator);
            } else if(ownLocator.using && ownLocator.value) {
                contextElement = element(ownLocator);
            } else if(ownLocator.element) {
                contextElement = ownLocator;
            }
            return sublocator ? contextElement.element(sublocator) : contextElement;
        }

        constructor(locator: (IElementLocator | webdriver.Locator | protractor.ElementFinder)) {
            this.locator = locator;
        }
    }
}