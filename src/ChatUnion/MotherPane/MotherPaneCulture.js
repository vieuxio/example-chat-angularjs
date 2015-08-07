angular.module('ChatUnion')
    .directive('motherPane', function () {
        return {
            templateUrl: 'ChatUnion/MotherPane/MotherPane.html',
            controller: 'MotherPaneRepresentative as motherPane'
        }
    });
