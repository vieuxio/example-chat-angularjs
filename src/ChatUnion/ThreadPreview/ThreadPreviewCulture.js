angular.module('ChatUnion')
    .directive('threadPreview', function () {
        return {
            templateUrl: 'ChatUnion/ThreadPreview/ThreadPreview.html',
            controller: 'ThreadPreviewRepresentative as threadPreview'
        }
    });
