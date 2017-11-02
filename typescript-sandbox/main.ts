interface Person {
    fullName: string;
    age: number;
}

class Greeter {
    name: string;
    sayHello() {
        console.log("Hello" + name);
    }
}
function sortByName(a: Person[]) {
    var result = a.slice(0);
    result.sort((x,y) => {
        return x.fullName.localeCompare(y.fullName);
    });
    return result;
}

sortByName([{ fullName: "Tanuj", age: 42}]);