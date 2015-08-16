angular.module('ChatUnion')
    .directive('chatBoxes', function () {
        return {
            templateUrl: 'ChatUnion/ChatBoxes/ChatBoxes.html',
            controller: 'ChatBoxesRepresentative as chatBoxes'
        }
    });
