# rf-bluebird

### A simple angular service/provider wrapper for the [bluebird](https://github.com/petkaantonov/bluebird) promise library.


### Instructions:

1. Include the [bluebird script](https://github.com/petkaantonov/bluebird#browsers).
2. Include the [angular](https://angularjs.org/) framework.
3. Include [rfBluebird](rfBluebird.js).
4. Add rfBluebird to your Angular module dependencies:
    
        var myApp = angular.module('myApp',['rfBluebird'])
5. Add bluebird provider to whatever needs and start using it like so:
       
        myApp.controller('myCtrl',['bluebird', function(bluebird){
            bluebird.Promise.delay(1000).then(function(){
                console.log('Bluebird, Huzzah!');
            });
        }])

6. Read the [bluebird API](https://github.com/petkaantonov/bluebird/blob/master/API.md) for more.

### You should know:

- This provider already hooks in to the $rootScope.asyncEval(), and should not need explicit use of $apply or $digest.
- bluebird does not use $exceptionHandler and handles errors itself. This could be a good thing.
- bluebird promises are FAST. See [here](http://jsperf.com/bluebird-vs-rsvp/).

### License:
Whatever the [bluebird](https://github.com/petkaantonov/bluebird) project uses currently.

### Credit:
All credit goes to the [bluebird](https://github.com/petkaantonov/bluebird) project team. 

       
