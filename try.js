var create = function (type) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var obj = Object.create(type.prototype);
    type.apply(obj, args);
    return obj;
};
var My = (function () {
    function My(name) {
        this.name = name;
    }
    return My;
})();
console.log(create(My, 'abc'));
