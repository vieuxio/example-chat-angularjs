'use strict';

angular.module('ChatUnion')
    .service('ChatUndertaker', function ($http, $q) {
        // For demo purposes
        var lazyResponse = function (promise, duration) {
            duration = duration || 300;

            return $q(function (resolve) {
                promise.then(resolve);
            });
        };

        this.getThreads = function () {
            return lazyResponse($http.get('/api/threads'));
        };

        this.getUpdates = function () {
            return lazyResponse($http.get('/api/updates'));
        };

        this.getOwner = function () {
            return lazyResponse($http.get('/api/owner'));
        };
    });
