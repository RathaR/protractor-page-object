module Core {
    export interface IObjectProperty {
        locator: webdriver.Locator,
        constructor: any,
        item?: IListItemLocator,
        properties?: {[propertyName: string] : IObjectProperty}
    }
}