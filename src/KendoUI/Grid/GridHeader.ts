///<reference path="../../Core/BaseElement.ts"/>
///<reference path="../../Core/BaseElementList.ts"/>
module KendoUI {
    export class GridHeader extends Core.BaseElement {
        protected headerCellLocator: webdriver.Locator;
        protected headerRowLocator: webdriver.Locator;

        columns() {
            return new Core.BaseElementList<Core.BaseElement>({
                context: this.element(),
                locator: this.headerRowLocator
            }, {
                locator: this.headerCellLocator,
                type: Core.BaseElement
            })
        }

        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.headerCellLocator = by.css('th[role=columnheader]');
            this.headerRowLocator = by.css('thead tr[role=row]');
        }

    }
}