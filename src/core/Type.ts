module Core {
    export class Type<T> {
        item: T;
        constructor(item: T) {
            this.item = item;
        }
        get type() {
            return this.item;
        }
    }
}
new Core.Type(Core.BaseButton);