/////<reference path="../ExpampleApp/KendoApp.ts" />
//import kendo = KendoUI;
//xdescribe('Kendo grid specs', () => {
//    var app: kendo.DemoApp,
//        page: kendo.ExamplePage;
//
//    beforeEach(()=> {
//        app = new kendo.DemoApp();
//        page = app.page<kendo.ExamplePage>('grid', kendo.ExamplePage);
//    });
//
//    describe('sidebar', () => {
//        var sidebar: kendo.SideBar;
//        beforeEach(() => {
//            sidebar = page.sideBar;
//            //or
//            //sidebar = page.prop<kendo.SideBar>('sidebar');
//        });
//
//        it('should be displayed', () => {
//            expect(sidebar.isDisplayed()).toBeTruthy();
//        });
//        it('should display elements', () => {
//            expect(sidebar.navBtn.isDisplayed()).toBeTruthy();
//            expect(sidebar.exampleNav.isDisplayed()).toBeTruthy();
//            expect(sidebar.rootNav.isDisplayed()).toBeTruthy();
//        });
//
//        it('should display example items', () => {
//            expect(sidebar.exampleNav.asText()).toEqual([
//                'Basic usage',
//                'Initialization from table',
//                'Binding to local data',
//                'Binding to remote data',
//                'Binding to Telerik Backend Services',
//                'Export to Excel',
//                'Export to PDF',
//                'Working Offline',
//                'Binding to SignalR',
//                'Binding to WebSocket',
//                'Batch editing',
//                'Inline editing',
//                'Popup editing',
//                'Editing custom editor',
//                'Custom validator editing',
//                'Virtualization of local data',
//                'Virtualization of remote data',
//                'Hierarchy', 'Detail template',
//                'Toolbar template',
//                'Custom command',
//                'Aggregates',
//                'Filter menu customization',
//                'Filter row',
//                'Filter Multi Checkboxes',
//                'Copy to Excel',
//                'Sorting',
//                'Selection',
//                'ForeignKey column',
//                'Multi-column headers',
//                'Column reordering',
//                'Column resizing',
//                'Column menu',
//                'Frozen columns',
//                'Row template',
//                'Events',
//                'API',
//                'Persist state',
//                'Localization',
//                'RTL support',
//                'Keyboard navigation',
//                'MVVM',
//                'AngularJS']);
//        });
//
//    });
//    describe('example view', () => {
//        var title: Core.BaseElement;
//        beforeEach(()=> {
//            title = page.prop<Core.BaseElement>('exampleView', 'title');
//        });
//        it('should show correct title', () => {
//            expect(title.getText()).toEqual('Grid / Basic usage');
//        });
//
//        describe('grid', () => {
//            var grid: KendoUI.Grid;
//
//            beforeEach(()=> {
//                var elem = page.prop<Core.BaseElement>('exampleView', 'exampleWrap').element();
//                grid = Core.BaseElement.create<KendoUI.Grid>(KendoUI.Grid, elem);
//            });
//
//            it('should be displayed', () => {
//                expect(grid.isDisplayed()).toBeTruthy();
//            });
//
//            it('should display header', () => {
//                expect(grid.header.isDisplayed()).toBeTruthy();
//                expect(grid.prop<Core.BaseElement>('header').isDisplayed()).toBeTruthy();
//            });
//
//            it('should get columns', () => {
//                expect(grid.header.columns.asText()).toEqual(['Contact Name', 'Contact Title', 'Company Name', 'Country']);
//            });
//
//            it('should get rows', ()=> {
//                var cell = grid.rows.get(0).cell(0);
//                expect(cell.isDisplayed()).toBeTruthy();
//                cell = grid.rows.get(0).cells.get(0);
//                expect(cell.isDisplayed()).toBeTruthy();
//            });
//
//            it('should get data from cell', () => {
//                var cell = grid.rows.get(0).cell(0);
//                expect(cell.getText()).toEqual('Maria Anders');
//            });
//
//            it('should get rows and cells count', ()=> {
//                expect(grid.rows.count()).toEqual(20);
//                expect(grid.rows.get(0).cells.count()).toEqual(4);
//            });
//
//            it('should get pager', () => {
//                expect(grid.pager.isDisplayed()).toBeTruthy();
//                expect(grid.prop<Core.BaseElement>('pager').isDisplayed()).toBeTruthy();
//                expect(grid.prop<Core.BaseElement>('pager', 'refreshBtn').isDisplayed()).toBeTruthy();
//                expect(grid.pager.refreshBtn.isDisplayed()).toBeTruthy();
//            });
//        });
//    });
//    //
//    //it('should get example view', () => {
//    //    expect(page.prop<Core.BaseElement>('exampleView').isDisplayed()).toBeTruthy();
//    //});
//    //
//    //it('should display title', () => {
//    //    expect(title.isDisplayed()).toBeTruthy();
//    //    expect(title.getText()).toEqual('Grid / Basic usage');
//    //});
//    //
//    //it('should display grid', () => {
//    //    expect(grid.isDisplayed()).toBeTruthy();
//    //});
//    //it('should get grid header', () => {
//    //    expect(grid.header.isDisplayed()).toBeTruthy();
//    //});
//    //
//    //it('should get columns', () => {
//    //    var columns = ['Contact Name', 'Contact Title', 'Company Name', 'Country'];
//    //    var header = grid.header;
//    //    columns.forEach((column, index) => {
//    //        expect(header.columns.get(index).getText()).toEqual(column);
//    //    });
//    //});
//    //
//    //it('should get rows', ()=> {
//    //    var cell = grid.rows.get(0).cell(0);
//    //    expect(cell.isDisplayed()).toBeTruthy();
//    //});
//    //
//    //it('should get rows', ()=> {
//    //    var cell = grid.rows.get(0).cells.get(0);
//    //    expect(cell.isDisplayed()).toBeTruthy();
//    //});
//    //
//    //it('should get pager', () => {
//    //    expect(grid.pager.isDisplayed()).toBeTruthy();
//    //    expect(grid.pager.refreshBtn.isDisplayed()).toBeTruthy();
//    //});
//
//});