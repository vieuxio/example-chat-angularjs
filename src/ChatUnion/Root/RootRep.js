angular.module('ChatUnion')
    .directive('root', function () {
        return {
            templateUrl: 'ChatUnion/Root/RootCulture.html',
            controller: 'RootRepresentative as root'
        }
    })

    .controller('RootRepresentative', function () {

    });
