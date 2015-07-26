///<reference path="../Core/BaseElement"/>
///<reference path="../Core/IObjectProperty"/>
module AngularStrap {
    export class Modal<TContent> extends Core.BaseElement {

        get content(): TContent {
            var property = this.getProperty('content');
            var ctor = property.constructor;
            return new ctor({context: this.element(), locator: property.locator});
        }

        constructor(locator: Core.IElementLocator, contentType) {
            super(locator);
            this.addProperty('content', {
                locator: by.css('.modal-content'),
                constructor: contentType
            });
        }
    }
}