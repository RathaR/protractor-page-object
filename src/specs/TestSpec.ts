describe('Test suite', () => {
    it('should get element', () => {
       browser.get('https://angular-ui.github.io/bootstrap/');
        expect(element(by.css('body')).isPresent()).toBeTruthy();
    });
});