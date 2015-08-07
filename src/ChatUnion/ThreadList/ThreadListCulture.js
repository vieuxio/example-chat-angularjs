angular.module('ChatUnion')
    .directive('threadList', function () {
        return {
            templateUrl: 'ChatUnion/ThreadList/ThreadList.html',
            controller: 'ThreadListRepresentative as threadList'
        }
    });
