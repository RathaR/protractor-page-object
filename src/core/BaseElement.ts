module Core {
    export interface IElementLocator {
        context : protractor.ElementFinder,
        locator? : webdriver.Locator

    }

    export class BaseElement {
        private locator: IElementLocator;

        isDisplayed() {
            return this.element().isDisplayed();
        }

        isPresent() {
            return this.element().isPresent();
        }

        element(sublocator?: webdriver.Locator): protractor.ElementFinder {
            var contextElement;
            if (!this.locator.context) {
                contextElement = element(this.locator.locator);
            } else {
                contextElement = this.locator.locator ? this.locator.context.element(this.locator.locator) : this.locator.context;
            }
            return sublocator ? contextElement.element(sublocator) : contextElement;
        }

        constructor(locator: IElementLocator) {
            this.locator = locator;
        }
    }
}