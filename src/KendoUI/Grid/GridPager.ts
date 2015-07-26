///<reference path="../../Core/BaseElement.ts"/>
///<reference path="../../Core/BaseElementList.ts"/>

module KendoUI {
    export class GridPager extends Core.BaseElement {
        protected refreshBtnProperty: Core.IObjectProperty;

        refreshBtn() {
            return new Core.BaseButton({
                context: this.element(),
                locator: this.refreshBtnProperty.locator
            });
        }

        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.refreshBtnProperty = {locator: by.css('.k-pager-refresh'), type: Core.BaseButton}
        }
    }
}