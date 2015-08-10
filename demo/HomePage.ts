//module Demo {
//    export class HomePage extends Core.BasePage {
//        get search() {
//            var prop = this.getProperty('search');
//            return new prop.constructor({
//                locator: prop.locator,
//                context: this.element()
//            })
//        }
//
//        get modules() {
//            var prop = this.getProperty('modules');
//            return new Core.BaseElementList<Core.BaseElementList<Core.BaseElement>>({
//                    locator: prop.locator,
//                    context: this.element()
//                },
//                prop.item
//            )
//        }
//
//        constructor(url) {
//            super(url);
//            this.addProperty('search', {
//                locator: by.css('input'),
//                constructor: Core.BaseElement
//            });
//            this.addProperty('modules', {
//                locator: by.css('[ng-repeat="module in modules"]'),
//                constructor: Core.BaseElementList,
//                item: {
//                    locator: by.css('ul'),
//                    constructor: Core.BaseElementList,
//                    item: {
//                        locator: by.css('li'),
//                        constructor: Core.BaseElement
//                    }
//                }
//            });
//        }
//    }
//}