angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    // this.message = "hello";
    this.people = clientPeople;

    // this.people = [
    //     {
    //         name: 'Tanuj Gupta'
    //     },
    //     {
    //         name: 'Shruti Gupta'
    //     },
    //     {
    //         name: 'Nikunj Aggarwal'
    //     }
    // ];
}