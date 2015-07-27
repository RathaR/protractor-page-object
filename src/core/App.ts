module Core {
    export class App {
        private url: string;

        page<TPage>(constructor?: any) : TPage {
            constructor = constructor || BasePage;
            return new constructor(this.url);
        }

        constructor(url: string) {
            this.url = url;
        }
    }
}