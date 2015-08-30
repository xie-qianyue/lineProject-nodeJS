// Implicit Annotation
// Careful: If you plan to minify your code, your service names will get renamed and break your app.
app.controller('lineController', function ($scope, $filter, lineService) {
    'use strict';

    var line = this;   

    line.today = moment().format();

    line.activities = [
        {
            name : 'reading',
            object : 'Hamlet'
        },
        {
            name : 'jogging'
        }
    ]

    line.addActivity = function() {
        var newActivity = {
            name : line.activityName
        }

        if(line.objectName != null){
            newActivity['object'] = line.objectName;
        }

        lineService.addActivity(newActivity);
    }


});