///<reference path="../../../core/BaseElementList.ts" />
module KendoUI {
    export class ItemsGroup extends Core.BaseElementList<Core.BaseElement> {

        title() {
            var prop = this.getProperty('title');
            return new Core.BaseElement({
                locator: prop.locator,
                context: this.element()
            });
        }

        constructor(locator: Core.IElementLocator) {
            super(locator, {
                constructor: Core.BaseElement,
                locator: by.css('li > a')
            });
            this.addProperty('title', {
                locator: by.css('li > h3'),
                constructor: Core.BaseElement
            })
        }
    }
}