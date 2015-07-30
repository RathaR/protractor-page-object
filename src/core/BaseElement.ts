module Core {
    /**
     * A BaseElement class is a wrapper around protractor.ElementFinder
     * and provide base functionality for all elements of application
     */
    export class BaseElement {

        private properties: {[index: string]: IObjectProperty};

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

        create<TObject>(constructor: any, params?: Object[]): TObject {
            //var obj : any  = new Core.BaseElement({context: this.element()});
            var obj = Object.create(constructor.prototype);
            params = params || [];
            params.unshift({context: this.element()});
            constructor.apply(obj, params);
            return obj;
            //return new constructor({context: this.element()});
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

        prop<TProp extends BaseElement>(...chain: string[]): TProp {
            var call = (object: BaseElement, args) => {
                return object.prop.apply(object, args);
            };
            var propId = chain.shift();
            var prop = this.getProperty(propId);
            if (!chain.length) {
                return new prop.constructor({
                    context: this.element(),
                    locator: prop.locator,
                    properties: prop.properties
                })
            } else {
                return call(new prop.constructor({
                    context: this.element(),
                    locator: prop.locator,
                    properties: prop.properties
                }), chain);
            }
            //return new prop.constructor({context: this.element(), locator: prop.locator, properties: prop.properties});
        }

        constructor(locator: IElementLocator) {
            this.locator = locator;
            this.properties = Object.create(null);
            if (locator.properties) {
                for (var prop in locator.properties) {
                    this.properties[prop] = locator.properties[prop];
                }
            }
        }
    }
}