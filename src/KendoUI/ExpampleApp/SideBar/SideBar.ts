module KendoUI {
    export class SideBar extends Core.BaseElement {
        get list() {
            var prop = this.getProperty('list');
            return new Core.BaseElementList<ItemsGroup>({
                context: this.element(),
                locator: prop.locator
            }, prop.item);
        }

        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.addProperty('list', {
                locator: by.css('#root-nav'),
                constructor: Core.BaseElementList,
                item: {
                    locator: by.css('ul.root-nav-categories'),
                    constructor: ItemsGroup
                }
            })
        }
    }
}