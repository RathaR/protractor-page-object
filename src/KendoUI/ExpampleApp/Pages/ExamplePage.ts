///<reference path="../../../core/BaseElement.ts"/>
///<reference path="../../../core/BasePage.ts"/>
module KendoUI {
    export class ExamplePage extends Core.BasePage {
        get sideBar() {
            var prop = this.getProperty('sideBar');
            return new SideBar({
                context: this.element(),
                locator: prop.locator
            })
        }
        //
        //get exampleView() {
        //    var prop = this.getProperty('exampleView');
        //    return new Core.BaseElement({
        //        context: this.element(),
        //        locator: prop.locator,
        //        properties: prop.properties
        //    })
        //}

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
                    'grid' : {
                        locator: by.css('#exampleWrap'),
                        constructor: Grid
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