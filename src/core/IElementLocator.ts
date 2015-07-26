module Core {
    export interface IElementLocator {
        context : protractor.ElementFinder,
        locator? : webdriver.Locator
    }
}