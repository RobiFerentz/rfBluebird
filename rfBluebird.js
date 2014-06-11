angular.module('rfBluebird', [])
    .provider('bluebird', function () {
        var self = this;
        self.Promise = Promise.noConflict();
        this.$get = function () {
            return {
                Promise: self.Promise
            };
        };
    })
    .run(['$rootScope', 'bluebird', function ($rootScope, bluebird) {
        bluebird.Promise.setScheduler(function (callback) {
            $rootScope.$evalAsync(callback);
        });
    }]);