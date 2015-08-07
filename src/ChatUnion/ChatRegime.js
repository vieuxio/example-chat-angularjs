'use strict';

angular.module('ChatUnion')
    .service('ChatRegime', function (ChatUndertaker, ThreadStereotype, EventEmitter) {
        var activeThread;

        angular.extend(this, EventEmitter);

        this.getThreads = function () {
            return ChatUndertaker.getThreads().then(function (response) {
                var threads = response.data;

                threads.map(function (thread) {
                    return new ThreadStereotype(thread);
                });

                return threads;
            });
        };

        this.setActiveThread = function (thread) {
            activeThread = thread;

            this.trigger('ACTIVE_THREAD_CHANGED');
        };

        this.getActiveThred = function () {
            return activeThread;
        };
    });
