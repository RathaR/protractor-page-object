module Core {
    export class App {
        private url: string;

        /**
         * Get application page object
         * @param pagePath Relative path to the page
         * @param constructor Page class constructor
         * @returns {any}
         */
        page<TPage>(pagePath: string, constructor?: any): TPage {
            constructor = constructor || BasePage;
            return new constructor([this.url, pagePath].join('/'));
        }

        constructor(url: string) {
            this.url = url;
        }
    }
}