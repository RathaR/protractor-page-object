module Core {
    export interface IListItemLocator {
        locator: webdriver.Locator,
        type?: {new(locator: IElementLocator)}
    }
    export class BaseElementList<TListItem extends BaseElement> extends BaseElement {
        private itemLocator: IListItemLocator;

        all(): protractor.ElementArrayFinder {
            return this.element().all(this.itemLocator.locator);
        }

        get(index: number): protractor.ElementFinder {
            return this.all().get(index);
        }

        item(index: number): TListItem {
            var element = this.get(index);
            var ctor = this.itemLocator.type || Core.BaseElement;
            return new ctor({context: element});
        }

        constructor(locator: IElementLocator, itemLocator: IListItemLocator) {
            super(locator);
            this.itemLocator = itemLocator;
        }
    }
}