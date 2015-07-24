module Core {

    export interface IElementLocator {
        context : protractor.ElementFinder,
        locator? : webdriver.Locator

    }

    export interface IElementConstructor {
        new (locator: IElementLocator)
    }

    export interface IPropertyLocator {
        locator: webdriver.Locator,
        type: IElementConstructor
    }

    export class BaseElement {
        protected locator: IElementLocator;

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