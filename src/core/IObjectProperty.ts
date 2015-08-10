//module Core {
//    /**
//     * describe element child
//     */
//    export interface IObjectProperty<TProperty> {
//        /**
//         * locator for property element finding
//         */
//        locator: webdriver.Locator,
//        /**
//         * context in witch locator will be evaluated
//         */
//        context?: protractor.ElementFinder
//        /**
//         * constructor which will be invoked for element creating
//         */
//        constructor: TProperty,
//
//        params? : Object[]
//
//        /**
//         * represent list item for properties that extend Core.BaseElementsList
//         */
//        //item?: IListItemLocator,
//
//        /**
//         * child properties configuration for short Core.BaseElement.prop<T> syntax reason
//         */
//        //properties?: {[propertyName: string] : IObjectProperty},
//    }
//}