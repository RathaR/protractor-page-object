///<reference path="../../../Core/BaseElement.ts"/>
///<reference path="../../../Core/BasePage.ts"/>
module KendoUI {
    export class ExamplePage extends Core.BasePage {
        get sideBar() {
            var prop = this.getProperty('sideBar');
            return new SideBar({
                context: this.element(),
                locator: prop.locator
            })
        }

        constructor(url: string) {
            super(url);
            this.addProperty('exampleView', {
                locator: by.css('#main'),
                constructor: Core.BaseElement,
                //new short 'prop' syntax example
                properties: {
                    'title': {
                        locator: by.css('#exampleTitle'),
                        constructor: Core.BaseElement
                    },
                    'exampleWrap' : {
                        locator: by.css('#exampleWrap'),
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