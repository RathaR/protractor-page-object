module KendoUI {
    export class SideBar extends Core.BaseElement {
        get rootNav() {
            var prop = this.getProperty('rootNav');
            return new Core.BaseElementList<ItemsGroup>({
                context: this.element(),
                locator: prop.locator
            }, prop.item);
        }

        get exampleNav() {
            var prop = this.getProperty('exampleNav');
            return new Core.BaseElementList<ItemsGroup>({
                context: this.element(),
                locator: prop.locator
            }, prop.item);
        }

        get navBtn() {
            var prop = this.getProperty('navBtn');
            return new Core.BaseButton({
                context: this.element(),
                locator: prop.locator
            });
        }
        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.addProperty('navBtn', {
                locator: by.css('#example-nav-bar > a'),
                constructor: Core.BaseButton,
            });
            this.addProperty('rootNav', {
                locator: by.css('#root-nav'),
                constructor: Core.BaseElementList,
                item: {
                    locator: by.css('ul.root-nav-categories'),
                    constructor: ItemsGroup
                }
            });
            this.addProperty('exampleNav', {
                locator: by.css('#example-nav'),
                constructor: Core.BaseElementList,
                item: {
                    locator: by.css('ul li > a'),
                    constructor: Core.BaseElement
                }
            });
        }
    }
}