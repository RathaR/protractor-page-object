///<reference path="../Core/BaseElement.ts"/>
module UIBootstrap {
    export class TabSet<THeader,TContent> extends Core.BaseElement {
        protected headerProperty: Core.IPropertyLocator<THeader>;
        protected contentProperty: Core.IPropertyLocator<TContent>;

        content(): TContent {
            var ctor = this.contentProperty.type;
            var locator = this.contentProperty.locator;
            var context = this.element();
            return new ctor({context: context, locator: locator});
        }

        heading(): Core.BaseElementList<THeader> {
            var headerLocator = this.headerProperty.locator;
            return new Core.BaseElementList<THeader>(
                this.locator,
                {
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