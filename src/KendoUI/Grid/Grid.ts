///<reference path="../../Core/BaseElement.ts"/>
///<reference path="../../Core/BaseElementList.ts"/>
module KendoUI {

    export class Grid extends Core.BaseElement {
        protected headerLocator: webdriver.Locator;
        protected gridContentLocator: webdriver.Locator;
        protected gridRowLocator: webdriver.Locator;
        protected pagerLocator: webdriver.Locator;

        rows: Core.BaseElementList<GridRow>;
        header: GridHeader;
        pager: GridPager;

        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.headerLocator = by.css('.k-grid-header');
            this.gridContentLocator = by.css('.k-grid-content tbody[role=rowgroup]');
            this.gridRowLocator = by.css('tr[role=row][data-uid]');
            this.pagerLocator = by.css('.k-pager-wrap.k-grid-pager[data-role=pager]')

            this.pager = new GridPager({context: this.element(), locator: this.pagerLocator});
            this.rows = new Core.BaseElementList<GridRow>({
                    context: this.element(),
                    locator: this.gridContentLocator
                },
                {
                    locator: this.gridRowLocator,
                    type: GridRow
                }
            );
            this.header = new GridHeader({
                context: this.element(),
                locator: this.headerLocator
            });
        }
    }
}