// Implicit Annotation
// Careful: If you plan to minify your code, your service names will get renamed and break your app.
app.controller('lineController', function ($scope, $filter) {
    'use strict';

    this.today = moment().format();
});