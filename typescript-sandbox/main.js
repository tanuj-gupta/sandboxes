class Greeter {
    sayHello() {
        console.log("Hello" + name);
    }
}
function sortByName(a) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.fullName.localeCompare(y.fullName);
    });
    return result;
}
sortByName([{ fullName: "Tanuj", age: 42 }]);
