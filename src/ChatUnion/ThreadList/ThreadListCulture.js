angular.module('ChatUnion')
    .directive('threadList', function () {
        return {
            scope: {},
            bindToController: {
                threadClick: '&'
            },
            templateUrl: 'ChatUnion/ThreadList/ThreadList.html',
            controller: 'ThreadListRepresentative as threadList'
        }
    });
