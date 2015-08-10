/////<reference path="../../Core/BaseElement.ts"/>
/////<reference path="../../Core/BaseElementList.ts"/>
//
//module KendoUI {
//    export class GridRow extends Core.BaseElement {
//
//        get cells() {
//            var cellProperty = this.getProperty('cell');
//            return new Core.BaseElementList<Core.BaseElement>({
//                context: this.element(),
//            }, {
//                locator: cellProperty.locator,
//                constructor: Core.BaseElement
//            })
//        }
//
//        cell(index: number) {
//            return this.cells.get(index);
//        }
//
//        constructor(locator: Core.IElementLocator) {
//            super(locator);
//            this.addProperty('cell', {
//                locator: by.css('td[role=gridcell]'),
//                constructor: Core.BaseElement
//            })
//        }
//    }
//}