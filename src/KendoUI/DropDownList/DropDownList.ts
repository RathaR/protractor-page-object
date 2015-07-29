module KendoUI {
    export class DropDownList extends Core.BaseElement {

        get popup() {
            var prop = this.getProperty('popup');
            return new Core.BaseElementList<Core.BaseElement>({
                locator: prop.locator,
                //????
                context: element(prop.locator)
            }, prop.item)
        }

        constructor(locator: Core.IElementLocator, popup: Core.IElementLocator) {
            super(locator);
            this.addProperty('popup', {
                locator: popup.locator,
                constructor: Core.BaseElementList,
                item: {
                    locator: by.css('ul > li[role="option"]'),
                    constructor: Core.BaseElement
                },
                ///TODO: temporary, by default
                context: element(by.css('body'))
            })
        }
    }
}