///<reference path="../core/App.ts"/>
module KendoUI {
    export class KendoApp extends Core.App {
        constructor() {
            browser.ignoreSynchronization = true;
            super('http://demos.telerik.com/kendo-ui')
        }
    }
}