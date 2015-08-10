var create = <TObject>(type: IConstructor<TObject>, ...args: Object[]): TObject => {
    var obj = Object.create(type.prototype);
    type.apply(obj, args);
    return <TObject> obj;
};
interface IConstructor<TObject> {
    new(p: string): TObject
}

class My{
    str: string;
    constructor(public name: string) {
    }

}

var a = create(My, 'abc');
a
