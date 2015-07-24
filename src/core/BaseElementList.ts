module Core {
    export interface IListItemLocator {
        locator: webdriver.Locator,
        type?: {new(locator: IElementLocator)}
    }
    export class BaseElementList<TListItem extends BaseElement> extends BaseElement {
        private itemLocator: IListItemLocator;

        private wrapItem(finder: protractor.ElementFinder): TListItem {
            var ctor = this.itemLocator.type || Core.BaseElement;
            return new ctor({context: finder});
        }

        all(): protractor.ElementArrayFinder {
            return this.element().all(this.itemLocator.locator);
        }

        get(index: number): protractor.ElementFinder {
            return this.all().get(index);
        }

        item(index: number): TListItem {
            var element = this.get(index);
            return this.wrapItem(element);
        }

        toArray(): webdriver.promise.Promise<TListItem[]> {
            var finders = this.all().asElementFinders_();
            return finders.then((finders) => {
                return finders.map((finder)=> {
                    return this.wrapItem(finder)
                });
            });
        }

        constructor(locator: IElementLocator, itemLocator: IListItemLocator) {
            super(locator);
            this.itemLocator = itemLocator;
        }
    }
}