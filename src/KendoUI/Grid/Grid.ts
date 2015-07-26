///<reference path="../../Core/BaseElement.ts"/>
///<reference path="../../Core/BaseElementList.ts"/>
module KendoUI {

    export class Grid extends Core.BaseElement {
        protected headerProperty: Core.IObjectProperty;
        protected contentProperty: Core.IObjectProperty;
        protected pagerProperty: Core.IObjectProperty;


        protected gridRowLocator: webdriver.Locator;

        rows() {
            return new Core.BaseElementList<GridRow>({
                    context: this.element(),
                    locator: this.contentProperty.locator
                }, {
                    locator: this.gridRowLocator,
                    type: GridRow
                }
            );
        }

        header() {
            return new GridHeader({
                context: this.element(),
                locator: this.headerProperty.locator
            });
        }

        pager() {
            return new GridPager({
                context: this.element(),
                locator: this.pagerProperty.locator
            })
        }

        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.headerProperty = {
                locator: by.css('.k-grid-header'),
                type: GridHeader
            };
            this.contentProperty = {
                locator: by.css('.k-grid-content tbody[role=rowgroup]'),
                type: Core.BaseElementList
            };
            this.pagerProperty = {
                type: GridPager,
                locator: by.css('.k-pager-wrap.k-grid-pager[data-role=pager]')
            };

            this.gridRowLocator = by.css('tr[role=row][data-uid]');

        }
    }
}