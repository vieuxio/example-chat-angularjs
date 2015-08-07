angular.module('ChatUnion')
    .directive('threadPreview', function () {
        return {
            scope: true,
            bindToController: {
                threadData: '='
            },
            templateUrl: 'ChatUnion/ThreadPreview/ThreadPreview.html',
            controller: 'ThreadPreviewRepresentative as threadPreview'
        }
    });
