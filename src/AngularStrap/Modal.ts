///<reference path="../Core/BaseElement"/>
module AngularStrap {
    export class Modal<TContent> extends Core.BaseElement {
        protected contentProperty: Core.IPropertyLocator<TContent>;

        content(): TContent {
            var ctor = this.contentProperty.type;
            var context = this.element();
            var locator = this.contentProperty.locator;
            return new ctor({context: context, locator: locator});
        }

        constructor(locator: Core.IElementLocator, contentType: Core.IElementConstructor<TContent>) {
            super(locator);
            this.contentProperty = {
                locator: by.css('.modal-content'),
                type: contentType
            }
        }
    }
}