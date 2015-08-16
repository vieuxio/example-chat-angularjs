angular.module('ChatUnion')
    .directive('chatPane', function () {
        return {
            scope: true,
            bindToController: {
                threadId: '@'
            },
            templateUrl: 'ChatUnion/ChatPane/ChatPane.html',
            controller: 'ChatPaneRepresentative as chatPane'
        }
    });
