///<reference path="../../Core/BaseElement.ts"/>
///<reference path="../../Core/BaseElementList.ts"/>

module KendoUI {
    export class GridPager extends Core.BaseElement {
        refreshBtn: Core.BaseButton;

        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.refreshBtn = new Core.BaseButton({
                context: this.element(),
                locator: by.css('.k-pager-refresh')
            })
        }
    }
}