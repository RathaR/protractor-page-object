/////<reference path="../src/core/App.ts" />
/////<reference path="./App.ts"/>
/////<reference path="./HomePage.ts"/>
//
//describe('demo app', () => {
//    var app: Demo.App;
//    beforeEach(() => {
//        app = new Demo.App();
//    });
//    describe('home page', () => {
//        var homePage : Demo.HomePage;
//        beforeEach(() => {
//            homePage = app.page<Demo.HomePage>('docs', Demo.HomePage);
//        });
//        it('should display page elements', () => {
//            expect(homePage.isDisplayed()).toBeTruthy();
//            expect(homePage.search.isDisplayed()).toBeTruthy();
//            expect(homePage.modules.isDisplayed()).toBeTruthy();
//            //alternative property access syntax
//            expect(homePage.prop<Core.BaseElement>('search').isDisplayed()).toBeTruthy();
//            expect(homePage.prop<Core.BaseElementList<Core.BaseElement>>('modules').isDisplayed()).toBeTruthy();
//        });
//
//        it('should display module elements', () => {
//            var modules = [{
//                name: 'Core',
//                items: ['BaseElement']
//            }];
//            modules.forEach((module, index) => {
//                var listItems = homePage.modules.get(index);
//                expect(listItems.asText()).toEqual(module.items);
//            });
//        });
//
//
//    });
//});