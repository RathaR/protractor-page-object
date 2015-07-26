module Core {

    export class BaseElementList<TListItem> extends BaseElement {
        private itemLocator: IListItemLocator;

        private wrapItem(elementFinder: protractor.ElementFinder): TListItem {
            var ctor = this.itemLocator.type;
            return new ctor({context: elementFinder});
        }

        all(): protractor.ElementArrayFinder {
            return this.element().all(this.itemLocator.locator);
        }

        get(index: number): TListItem {
            var element = this.all().get(index);
            return this.wrapItem(element);
        }

        toArray(): webdriver.promise.Promise<TListItem[]> {
            var finders = this.all().asElementFinders_();
            return finders.then((finders) => {
                return finders.map((elementFinder) => {
                    return this.wrapItem(elementFinder)
                });
            });
        }

        constructor(locator: IElementLocator, itemLocator: IListItemLocator) {
            super(locator);
            this.itemLocator = itemLocator;
        }
    }
}