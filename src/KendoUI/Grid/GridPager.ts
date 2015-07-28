///<reference path="../../Core/BaseElement.ts"/>
///<reference path="../../Core/BaseElementList.ts"/>

module KendoUI {
    export class GridPager extends Core.BaseElement {

        get refreshBtn() {
            var prop = this.getProperty('refreshBtn');
            return new Core.BaseButton({
                context: this.element(),
                locator: prop.locator
            });
        }

        constructor(locator: Core.IElementLocator) {
            super(locator);
            this.addProperty('refreshBtn', {locator: by.css('.k-pager-refresh'), constructor: Core.BaseButton});
        }
    }
}