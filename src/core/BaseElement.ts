///<reference path="./IElementLocator.ts" />
///<reference path="../typings/tsd.d.ts"/>


module Core {

    export interface IElementLocator {
        context : protractor.ElementFinder,
        locator : webdriver.Locator
    }

    export interface IElementConstructor<T> {
        new(locator: (IElementLocator | webdriver.Locator | protractor.ElementFinder), ...args: Object[]): T
    }
    export var create = <TObject>(ctor: IElementConstructor<TObject>,
                                  locator: (IElementLocator | webdriver.Locator | protractor.ElementFinder),
                                  ctorParams: Object[] = []): TObject => {
        var obj = Object.create(ctor.prototype);
        ctorParams.unshift(locator);
        ctor.apply(obj, ctorParams);
        return <TObject> obj;
    };

    /**
     * A BaseElement class is a wrapper around protractor.ElementFinder
     * and provide base functionality for all elements of application
     */
    export class BaseElement {
        //
        //static create<TObject>(constructor: ElementConstructor, context: protractor.ElementFinder, params?: Object[]) {
        //    constructor = <any>constructor;
        //    var obj = Object.create(constructor.prototype);
        //    params = params || [];
        //    params.unshift({context: context}); // add locator - first constructor argument
        //    constructor.apply(obj, params);
        //    return <TObject> obj;
        //}

        //private properties: {[index: string]: IObjectProperty};

        protected locator: any;//(IElementLocator | webdriver.Locator | protractor.ElementFinder);

        //protected getProperty(id: string) {
        //    var property = this.properties[id];
        //    if (!property) {
        //        throw new Error('Can not find property: ' + id + '. You must use BaseElement.addProperty to add object property configuration');
        //    }
        //    return property;
        //}
        //
        //protected addProperty(id: string, prop: IObjectProperty) {
        //    if (this.properties[id]) {
        //        throw new Error(id + ' property already exist!');
        //    }
        //    this.properties[id] = prop;
        //}

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

        //prop<TProp>(...chain: string[]): TProp {
        //    var call = (object: BaseElement, args) => {
        //        return object.prop.apply(object, args);
        //    };
        //    var propId = chain.shift();
        //    var prop = this.getProperty(propId);
        //    if (!chain.length) {
        //        return new prop.constructor({
        //            context: this.element(),
        //            locator: prop.locator,
        //            properties: prop.properties
        //        })
        //    } else {
        //        return call(new prop.constructor({
        //            context: this.element(),
        //            locator: prop.locator,
        //            properties: prop.properties
        //        }), chain);
        //    }
        //}

        constructor(locator: (IElementLocator | webdriver.Locator | protractor.ElementFinder), ...args: Object[]) {
            this.locator = locator;
        }
    }
}