/////<reference path="../../Core/BaseElement.ts"/>
/////<reference path="../../Core/BaseElementList.ts"/>
//module KendoUI {
//    export class GridHeader extends Core.BaseElement {
//
//        get columns() {
//            var prop = this.getProperty('columns');
//            return new Core.BaseElementList<Core.BaseElement>({
//                context: this.element(),
//                locator: prop.locator
//            }, {
//                locator: prop.item.locator,
//                constructor: prop.item.constructor
//            })
//        }
//
//        constructor(locator: Core.IElementLocator) {
//            super(locator);
//            this.addProperty('columns', {
//                locator: by.css('thead tr[role=row]'),
//                constructor: Core.BaseElementList,
//                item: {
//                    locator: by.css('th[role=columnheader]'),
//                    constructor: Core.BaseElement
//                }
//            });
//        }
//
//    }
//}