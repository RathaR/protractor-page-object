module Core {

    export class BaseElementList<TListItem> extends BaseElement {

        private itemCtor: TListItem;
        private itemCtorParams: Object[];
        private itemLocator: any;
        //private itemLocator: (IElementLocator | webdriver.Locator | protractor.ElementFinder);

        //private wrapItem(elementFinder: protractor.ElementFinder): TListItem {
        //    var ctor = this.itemLocator.constructor;
        //    return new ctor({context: elementFinder}, this.itemLocator );
        //}

        all(subLocator?: webdriver.Locator) {
            var contextEl: protractor.ElementFinder, locator: webdriver.Locator;
            if (this.itemLocator.locator && this.itemLocator.context) {
                contextEl = this.itemLocator.context;
                locator = this.itemLocator.locator;
            } else if (this.itemLocator.using) {
                contextEl = this.element();
                locator = this.itemLocator;
            }
            return subLocator ? contextEl.all(locator).all(subLocator) : contextEl.all(locator);
        }

        asText() {
            return this.all().map((item) => {
                return item.getText();
            })
        }

        count() {
            return this.all().count();
        }

        get(index: number) {
            var context = this.all().get(index);
            return Core.create<TListItem>(this.itemLocator.constructor, context, this.itemLocator.params);
        }

        //toArray(): webdriver.promise.Promise<TListItem[]> {
        //    var finders = this.all().asElementFinders_();
        //    return finders.then((finders) => {
        //        return finders.map((elementFinder) => {
        //            return this.wrapItem(elementFinder)
        //        });
        //    });
        //}

        constructor(locator: (IElementLocator | webdriver.Locator), ...args: Object[]) {
            super(locator);
            this.itemCtor = args[0];
            this.itemLocator = <(IElementLocator | webdriver.Locator)>args[1];
            this.itemCtorParams = args.slice(2);
        }
    }
}