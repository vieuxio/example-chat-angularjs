angular.module('ChatUnion')
    .service('ChatRegime', function (ChatUndertaker) {
        var activeThread;

        this.getThreads = function () {
            return ChatUndertaker.getThreads();
        };

        this.setActiveThread = function (thread) {
            activeThread = thread;

            this.trigger('ACTIVE_THREAD_CHANGED');
        }
    });
