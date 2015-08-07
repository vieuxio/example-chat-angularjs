angular.module('ChatUnion')
    .directive('menu', function () {
        return {
            templateUrl: 'ChatUnion/Menu/Menu.html',
            controller: 'MenuRepresentative as menu'
        }
    });
