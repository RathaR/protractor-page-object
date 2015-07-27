describe('Kendo grid specs', () => {
    var grid: KendoUI.Grid,
        app: KendoUI.KendoApp,
        page: KendoUI.ExamplePage,
        title: Core.BaseElement;
    beforeEach(()=> {
        app = new KendoUI.KendoApp();
        page = app.page<KendoUI.ExamplePage>('grid', KendoUI.ExamplePage);
        //new short 'prop' syntax example
        grid = page.prop<KendoUI.Grid>('exampleView', 'grid');
        //grid = page.prop<Core.BaseElement>('exampleView').prop<KendoUI.Grid>('grid');
        title = page.prop<Core.BaseElement>('exampleView').prop<Core.BaseElement>('title');
    });

    it('should get example view', () => {
        expect(page.prop<Core.BaseElement>('exampleView').isDisplayed()).toBeTruthy();
    });

    it('should display title', () => {
        expect(title.isDisplayed()).toBeTruthy();
        expect(title.getText()).toEqual('Grid / Basic usage');
    });

    it('should display grid', () => {
        expect(grid.isDisplayed()).toBeTruthy();
    });
    it('should get grid header', ()=> {
        expect(grid.header.isDisplayed()).toBeTruthy();
    });

    it('should get columns', ()=> {
        var columns = ['Contact Name', 'Contact Title', 'Company Name', 'Country'];
        var header = grid.header;
        columns.forEach((column, index) => {
            expect(header.columns.get(index).getText()).toEqual(column);
        });
    });

    it('should get rows', ()=> {
        var cell = grid.rows.get(0).cell(0);
        expect(cell.isDisplayed()).toBeTruthy();
    });

    it('should get rows', ()=> {
        var cell = grid.rows.get(0).cells.get(0);
        expect(cell.isDisplayed()).toBeTruthy();
    });

    it('should get pager', () => {
        expect(grid.pager.isDisplayed()).toBeTruthy();
        expect(grid.pager.refreshBtn.isDisplayed()).toBeTruthy();
    });

});