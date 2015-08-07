angular.module('ChatUnion')
    .directive('chatPane', function () {
        return {
            templateUrl: 'ChatUnion/ChatPane/ChatPane.html',
            controller: 'ChatPaneRepresentative as chatPane'
        }
    });
