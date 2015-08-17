module Core {
    export class TestElement extends Core.BaseElement {
        testMethod() {
            return "test";
        }
    }

}
describe('Test/demo suite for BaseElementsList class', () => {

    beforeEach(() => {
        browser.get('http://rathar.github.io/protractor-page-object/#/docs');
    });

    describe('Elements list', () => {

        var listRootLocator,
            itemType,
            itemLocator,
            listWithoutItemsContext,
            listWithItemsContext,
            listOfTestElements,
            listOfLists;
        beforeEach(()=> {
            listRootLocator = {
                locator: by.css('[ng-controller="DocsController"]'),
                context: element(by.css('body'))
            };
            itemType = Core.BaseElement;
            itemLocator = by.css('[ng-repeat="module in modules"]');
            listWithoutItemsContext = new Core.BaseElementList(listRootLocator, Core.BaseElement, itemLocator, null);
            listWithItemsContext = new Core.BaseElementList(listRootLocator, Core.BaseElement, itemLocator, element(by.css('body')));
            listOfTestElements = new Core.BaseElementList(listRootLocator, Core.TestElement, itemLocator, element(by.css('body')));
            listOfLists = new Core.BaseElementList(
                listRootLocator,
                Core.BaseElementList,
                by.css('[ng-repeat="module in modules"]'),
                null,
                [
                    Core.BaseElement,
                    by.css('[ng-repeat="component in module.components | filter:search"]'),
                    null
                ]
            );
        });
        describe('constructor', () => {
            it('should create BaseElementsList of BaseElements without items context', () => {
                expect(listWithoutItemsContext.isDisplayed()).toBeTruthy();
                expect(listWithoutItemsContext.all().count()).toEqual(4);
            });
            it('should create BaseElementsList of BaseElements with items context', () => {
                expect(listWithItemsContext.isDisplayed()).toBeTruthy();
                expect(listWithItemsContext.all().count()).toEqual(4);
            });
            it('should create BaseElementsList of TestElements', () => {
                expect(listOfTestElements.isDisplayed()).toBeTruthy();
                expect(listOfTestElements.all().count()).toEqual(4);
            });
            it('should create BaseElementsList of BaseElementsList', () => {
                expect(listOfLists.get(0).get(0).isDisplayed()).toBeTruthy();
            });

        });

        describe('get(number) method', () => {
            it('should return correct typed instance', () => {
                expect(listOfTestElements.get(0).element).toBeDefined();
                expect(listOfTestElements.get(0).testMethod).toBeDefined();
            });
        });

        describe('all(subLocator?) method', () => {
            it('should return correct ElementArrayFinder', () => {
                expect(listWithoutItemsContext.all().count()).toEqual(4);
                expect(listWithItemsContext.all().count()).toEqual(4);
            });

            it('should return correct ElementArrayFinder by subLocator', () => {
                expect(listWithoutItemsContext.all(by.css('a')).count()).toEqual(8);
            });
        });

        describe('asText() method', () => {
            it('should return string array', () => {
                expect(listWithoutItemsContext.asText()).toEqual([
                    'Core\nBaseElement\nBaseElementsList\nBaseApp',
                    'Kendo\nGrid\nPager\nDropDownList',
                    'AngularStrap\nModal',
                    'UIBootstrap\nTabSet'
                ]);
            });
        });
        //it('should create list of TestElements ', () => {
        //    var listRootLocator = {
        //        locator: by.css('[ng-controller="DocsController"]'),
        //        context: element(by.css('body'))
        //    };
        //    var list = new Core.BaseElementList(
        //        listRootLocator,
        //        Core.BaseElementList,
        //        by.css('[ng-repeat="module in modules"]'),
        //        null,
        //        [
        //            Core.BaseElement,
        //            by.css('[ng-repeat="component in module.components | filter:search"]'),
        //            null
        //        ]
        //    );
        //    expect(list.isDisplayed()).toBeTruthy();
        //    expect(list.all().count()).toEqual(4);
        //    expect(list.get(0).get(0).isDisplayed()).toBeTruthy();
        //});
    });

});