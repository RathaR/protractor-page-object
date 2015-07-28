///<reference path="../../Core/BaseElement.ts"/>
///<reference path="../../Core/BaseElementList.ts"/>
module KendoUI {

    export class Grid extends Core.BaseElement {

        get rows() {
            var contentProp = this.getProperty('content');
            return new Core.BaseElementList<GridRow>({
                    context: this.element(),
                    locator: contentProp.locator
                }, {
                    locator: contentProp.item.locator,
                    constructor: contentProp.item.constructor
                }
            );
        }

        get header() {
            var property = this.getProperty('header');
            return new GridHeader({
                context: this.element(),
                locator: property.locator
            });
        }


        get pager() {
            var property = this.getProperty('pager');
            return new GridPager({
                context: this.element(),
                locator: property.locator
            })
        }

        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.addProperty('header', {
                locator: by.css('.k-grid-header'),
                constructor: GridHeader
            });
            this.addProperty('content', {
                locator: by.css('.k-grid-content tbody[role=rowgroup]'),
                constructor: Core.BaseElementList,
                item: {
                    locator: by.css('tr[role=row][data-uid]'),
                    constructor: GridRow
                }
            });
            this.addProperty('pager', {
                constructor: GridPager,
                locator: by.css('.k-pager-wrap.k-grid-pager[data-role=pager]')
            });

        }
    }
}