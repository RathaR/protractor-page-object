///<reference path="../../Core/BaseElement.ts"/>
///<reference path="../../Core/BaseElementList.ts"/>

module KendoUI {
    export class GridRow extends Core.BaseElement {
        protected gridCellLocator: webdriver.Locator;

        cells: Core.BaseElementList<Core.BaseElement>;

        cell(index: number) {
            return this.cells.get(index);
        }

        constructor(locator: Core.IElementLocator) {
            this.gridCellLocator = by.css('td[role=gridcell]');
            super(locator);
            this.cells = new Core.BaseElementList<Core.BaseElement>({
                context: this.element(),
            }, {
                locator: this.gridCellLocator,
                type: Core.BaseElement
            })
        }
    }
}