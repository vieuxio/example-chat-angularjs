'use strict';

angular.module('ChatUnion')
    .service('ChatUndertaker', function ($http) {

        this.getThreads = function () {
            return $http.get('/api/threads');
        };

    });
