angular.module('ChatUnion')
    .directive('threadsPopover', function () {
        return {
            scope: true,
            bindToController: {
                threadData: '='
            },
            templateUrl: 'ChatUnion/ThreadsPopover/ThreadsPopover.html',
            controller: 'ThreadsPopoverRepresentative as threadsPopover'
        }
    });
