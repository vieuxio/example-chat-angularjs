angular.module('ChatUnion')
    .directive('root', function () {
        return {
            templateUrl: 'ChatUnion/Root/Root.html',
            controller: 'RootRepresentative as root'
        }
    });
