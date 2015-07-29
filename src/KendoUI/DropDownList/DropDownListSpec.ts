///<reference path="../ExpampleApp/KendoApp.ts" />

describe('DropDownList specs', () => {
    var app: kendo.DemoApp,
        page: kendo.ExamplePage,
        colorDropDownList: kendo.DropDownList;

    beforeEach(()=> {
        app = new kendo.DemoApp();
        page = app.page<kendo.ExamplePage>('dropdownlist', kendo.ExamplePage);
        colorDropDownList = page.prop<Core.BaseElement>('exampleView', 'exampleWrap').create<KendoUI.DropDownList>(kendo.DropDownList, [{
            locator: by.css('#color-list'),
            context: null
        }]);
    });

    it('should display page', () => {
        expect(page.isDisplayed()).toBeTruthy();
    });

    it('should show correct title', () => {
        expect(page.prop<Core.BaseElement>('exampleView', 'title').getText()).toEqual('DropDownList / Basic usage');
    });

    it('should display dropdown element', () => {
        expect(colorDropDownList.isDisplayed()).toBeTruthy();
    });

});