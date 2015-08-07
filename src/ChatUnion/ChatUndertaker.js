angular.module('ChatUnion')
    .service('ChatUndertaker', function ($q, $timeout) {

        this.getThreads = function () {

            return $q(function (resolve) {
                // TODO: read from mock db
                var response = [{}];

                $timeout(function () {
                    resolve(response);
                }, 300);
            });
        };

    });
