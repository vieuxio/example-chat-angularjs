angular.module('ChatUnion')
    .directive('chatBox', function () {
        return {
            scope: true,
            bindToController: {
                threadData: '='
            },
            templateUrl: 'ChatUnion/ChatBox/ChatBox.html',
            controller: 'ChatBoxRepresentative as chatBox',
            link: function (scope, element, attrs, ctrl) {
                ctrl.toggle = function () {
                    element.toggleClass('minimized');
                };
            }
        }
    });
