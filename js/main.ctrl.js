/**
 * Created by LABUSER on 10/1/2015.
 */
MyApp.controller('mainController', function(){
    var vm = this;
    vm.yourName = "";
    vm.list = [
        {
            name: "21",
            mediaType: "Blu-Ray",
            genre: "Drama",
            year: 2008,
            length: 123,
            mpr: "PG-13",
            checkOut: false
        },
        {
            name: "Baby Mama",
            mediaType: "DVD",
            genre: "Comedy",
            year: 2008,
            length: 99,
            mpr: "PG-13",
            checkOut: false
        }
    ]

});