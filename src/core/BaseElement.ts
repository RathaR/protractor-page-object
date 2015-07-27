///<reference path="../typings/tsd.d.ts" />
module Core {
    export class BaseElement {
        private properties: Object;

        protected locator: IElementLocator;

        protected getProperty(id: string) {
            var property = this.properties[id];
            if (!property) {
                throw new Error('Can not find property: ' + id + '. You must use BaseElement.addProperty to add object property configuration');
            }
            return property;
        }

        protected addProperty(id: string, prop: IObjectProperty) {
            if (this.properties[id]) {
                throw new Error(id + ' property already exist!');
            }
            this.properties[id] = prop;
        }

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

        prop(id: string): any {
            var prop = this.getProperty(id);
            return new prop.constructor({context: this.element(), locator: prop.locator});
        }

        constructor(locator: IElementLocator) {
            this.locator = locator;
            this.properties = Object.create(null);
            if (locator.properties) {
                for (var prop in locator.properties) {
                    var value = locator.properties[prop];
                    this.properties[prop] = locator.properties[prop];
                    //var getter = () => {
                    //    return new value.constructor({context: this.element(), locator: value.locator});
                    //};
                    //this[prop] = getter;
                }
            }
        }
    }
}