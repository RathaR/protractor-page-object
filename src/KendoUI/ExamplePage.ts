///<reference path="../core/BaseElement.ts"/>
///<reference path="../core/BasePage.ts"/>
module KendoUI {
    export class ExamplePage extends Core.BasePage {
        get sideBar() {
            var prop = this.getProperty('sideBar');
            return new Core.BaseElement({
                context: this.element(),
                locator: prop.locator
            })
        }

        get exampleView() {
            var prop = this.getProperty('exampleView');
            return new Core.BaseElement({
                context: this.element(),
                locator: prop.locator,
                properties: prop.properties
            })
        }

        constructor(baseUrl: string) {
            this.path = "grid";
            super(baseUrl);
            this.addProperty('exampleView', {
                locator: by.css('#main'),
                constructor: Core.BaseElement,
                properties: {
                    'title': {
                        locator: by.css('#exampleTitle'),
                        constructor: Core.BaseElement
                    }
                }
            });
            this.addProperty('sideBar', {
                locator: by.css('#example-sidebar'),
                constructor: Core.BaseElement
            });
        }
    }

}