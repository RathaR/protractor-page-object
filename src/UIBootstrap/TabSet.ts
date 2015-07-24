///<reference path="../core/BaseElement.ts"/>
module UIBootstrap {
    export class TabSet<THeader,TContent> extends Core.BaseElement {
        private headerProperty: Core.IPropertyLocator<THeader>;
        private contentProperty: Core.IPropertyLocator<TContent>;

        content(): TContent {
            var ctor = this.contentProperty.type;
            var locator = this.contentProperty.locator;
            var context = this.element();
            return new ctor({context: context, locator: locator});
        }

        heading(): Core.BaseElementList<THeader> {
            var headerLocator = this.headerProperty.locator;
            //var context = this.element().all(headerLocator).get(index);
            //var listItemLocator = {context: headerLocator, type : THeader};
            return new Core.BaseElementList<THeader>(this.locator, {
                locator: headerLocator,
                type: this.headerProperty.type
            });
        }

        constructor(locator: Core.IElementLocator, headerType: Core.IElementConstructor<THeader>, contentType: Core.IElementConstructor<TContent>) {
            super(locator);
            this.contentProperty = {
                locator: by.css('.tab-content .tab-pane'),
                type: contentType
            };
            this.headerProperty = {
                locator: by.css('a[tab-heading-transclude]'),
                type: headerType
            };
        }

    }
}