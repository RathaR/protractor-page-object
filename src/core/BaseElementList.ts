module Core {

    export class BaseElementList<TListItem> extends BaseElement {

        private itemCtor: IElementConstructor<TListItem>;
        private itemCtorParams: any[];
        private itemLocator: webdriver.Locator;
        private itemContext: protractor.ElementFinder;

        all(subLocator?: webdriver.Locator) {
            var contextEl = this.itemContext,
                locator = this.itemLocator;
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
            return Core.create(this.itemCtor, context, this.itemCtorParams);
        }

        //toArray(): webdriver.promise.Promise<TListItem[]> {
        toArray() {
            var finders = this.all().asElementFinders_();
            return finders.then((finders) => {
                return finders.map((elementFinder) => {
                    return Core.create(BaseElementList, elementFinder);
                });
            });
        }

        constructor(locator: (IElementLocator | webdriver.Locator | protractor.ElementFinder),
                    listItemType: IElementConstructor<TListItem>,
                    itemLocator: webdriver.Locator,
                    itemContext: protractor.ElementFinder,
                    itemCtorParams: any[] = []) {
            super(locator);
            this.itemCtor = listItemType;
            this.itemLocator = itemLocator;
            this.itemContext = itemContext || this.element();
            this.itemCtorParams = itemCtorParams;
        }
    }

}