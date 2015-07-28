var kendo = require('KendoUI');
describe('Kendo grid specs', function () {
    var app, page, title, grid;
    beforeEach(function () {
        app = new kendo.DemoApp();
        page = app.page('grid', kendo.ExamplePage);
        title = page.prop('exampleView').prop('title');
    });
    describe('sidebar', function () {
        var sidebar;
        beforeEach(function () {
            sidebar = page.sideBar;
        });
        it('should be displayed', function () {
            expect(sidebar.isDisplayed()).toBeTruthy();
        });
        it('should display correct items', function () {
            expect(sidebar.list.isDisplayed()).toBeFalsy();
        });
    });
    describe('example view', function () {
        it('should show correct title', function () {
        });
    });
});
