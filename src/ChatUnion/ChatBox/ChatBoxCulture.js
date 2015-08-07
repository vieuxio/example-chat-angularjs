angular.module('ChatUnion')
    .directive('culture', function () {
        return {
            templateUrl: 'ChatUnion/ChatBox/ChatBox.html',
            controller: 'ChatBoxRepresentative as chatBox'
        }
    });
