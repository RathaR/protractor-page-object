///<reference path="../Core/BaseElement.ts"/>
module UIBootstrap {
    export class TabSet<THeader,TContent> extends Core.BaseElement {
        protected headerProperty: Core.IObjectProperty;
        protected contentProperty: Core.IObjectProperty;

        content(): TContent {
            var ctor = this.contentProperty.constructor;
            var locator = this.contentProperty.locator;
            var context = this.element();
            return new ctor({context: context, locator: locator});
        }

        heading() {
            var headerLocator = this.headerProperty.locator;
            return new Core.BaseElementList<THeader>(
                this.locator,
                {
                    locator: headerLocator,
                    type: this.headerProperty.constructor
                });
        }

        constructor(locator: Core.IElementLocator, headerType, contentType) {
            super(locator);
            this.contentProperty = {
                locator: by.css('.tab-content .tab-pane'),
                constructor: contentType
            };
            this.headerProperty = {
                locator: by.css('a[tab-heading-transclude]'),
                constructor: headerType
            };
        }

    }
}