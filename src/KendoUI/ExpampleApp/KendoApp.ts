///<reference path="../../core/App.ts"/>
module KendoUI {
    export class DemoApp extends Core.App {
        constructor() {
            browser.ignoreSynchronization = true;
            browser.driver.manage().window().maximize();
            super('http://demos.telerik.com/kendo-ui');
        }
    }
}