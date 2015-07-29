///<reference path="../../Core/BaseElement.ts"/>
module UIBootstrap {
    export class TabSet<THeader,TContent> extends Core.BaseElement {

        content(): TContent {
            var prop = this.getProperty('content');
            return new prop.constructor({context: this.element(), locator: prop.locator});
        }

        heading(): Core.BaseElementList<THeader> {
            var headingProp = this.getProperty('heading');
            return new headingProp.constructor(this.locator, headingProp.item);
        }

        constructor(locator: Core.IElementLocator, headerType, contentType) {
            super(locator);
            this.addProperty('content', {
                locator: by.css('.tab-content .tab-pane'),
                constructor: contentType
            });
            this.addProperty('heading', {
                locator: this.locator.locator,
                constructor: Core.BaseElementList,
                item: {
                    locator: by.css('a[tab-heading-transclude]'),
                    constructor: headerType
                }
            });
        }

    }
}