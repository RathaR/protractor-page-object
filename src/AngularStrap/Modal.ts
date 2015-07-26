///<reference path="../Core/BaseElement"/>
///<reference path="../Core/IObjectProperty"/>
module AngularStrap {
    export class Modal<TContent> extends Core.BaseElement {
        protected contentProperty: Core.IObjectProperty;

        content(): TContent {
            var ctor = this.contentProperty.constructor;
            var contentLocator = this.contentProperty.locator;
            return new ctor({context: this.element(), locator: contentLocator});
        }

        constructor(locator: Core.IElementLocator, contentType) {
            super(locator);
            this.contentProperty = {
                locator: by.css('.modal-content'),
                constructor: contentType
            }
        }
    }
}