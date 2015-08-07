angular.module('ChatUnion')
    .directive('threadPreview', function () {
        return {
            scope: true,
            bindToController: {
                threadData: '='
            },
            templateUrl: 'ChatUnion/ThreadPreview/ThreadPreview.html',
            controller: 'ThreadPreviewRepresentative as threadPreview',
            link: function (scope, element, attrs, ctrl) {
                element.on('click', function () {
                    ctrl.setActiveThread();
                });

                ctrl.bind('THREAD_ACTIVATED', function () {
                    element.addClass('active');
                });

                ctrl.bind('THREAD_DEACTIVATED', function () {
                    element.removeClass('active');
                });
            }
        }
    });
