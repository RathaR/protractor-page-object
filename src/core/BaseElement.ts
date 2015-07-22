module Core {
    export interface IElementLocator {
        context : BaseElement,
        locator? : webdriver.Locator
    }
    export class BaseElement {
        private locator: IElementLocator;

        element(sublocator?: webdriver.Locator): protractor.ElementFinder {
            var contextElement;
            if (!this.locator.context) {
                contextElement = element(this.locator.locator);
            } else {
                contextElement = this.locator.locator ? this.locator.context.element(this.locator.locator) : this.locator.context.element();
            }
            return sublocator ? contextElement.element(sublocator) : contextElement;
        }

        constructor(locator: IElementLocator) {
            this.locator = locator;
        }
    }
}