describe('Kendo grid specs', () => {
    var grid: KendoUI.Grid;
    beforeEach(()=> {
        browser.ignoreSynchronization = true;
        browser.get('http://demos.telerik.com/kendo-ui/grid/index');
        grid = new KendoUI.Grid({
            locator: by.css('#grid'),
            context: element(by.css('body'))
        });
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
        expect(grid.pager.refreshBtn().isDisplayed()).toBeTruthy();
    });

});