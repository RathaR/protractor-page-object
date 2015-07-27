module Core {
    export class App {
        private url: string;

        page<TPage>(pagePath: string, constructor?: any): TPage {
            constructor = constructor || BasePage;
            return new constructor([this.url, pagePath].join('/'));
        }

        constructor(url: string) {
            this.url = url;
        }
    }
}