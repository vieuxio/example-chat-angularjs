'use strict';

angular.module('ChatUnion')
    .service('ChatRegime', function (ChatUndertaker, ThreadStereotype, EventEmitter, $timeout) {
        var activeThread,
            self = this;

        self.EventType = {
            INITIAL_DATA: 'initial data',
            SET_ACTIVE_THREAD: 'set active thread',
            UPDATE: 'update'
        };

        angular.extend(self, new EventEmitter());

        var threads = [];

        var onInitialData = function (response) {
            threads = response.data;

            threads = threads.map(function (thread) {
                return new ThreadStereotype(thread);
            });

            activeThread = threads[0];

            self.trigger(self.EventType.INITIAL_DATA, threads);
        };

        var getThreads = function () {
            return ChatUndertaker.getThreads().then(onInitialData);
        };

        self.setActiveThread = function (thread) {
            activeThread = thread;

            self.trigger(self.EventType.SET_ACTIVE_THREAD);
        };

        self.getActiveThread = function () {
            return activeThread;
        };

        self.getUnreadCount = function() {
            return threads.filter(function(thread) {
                return thread.unread;
            }).length;
        };

        self.getThreadById = function (id) {
            return threads.filter(function(thread) {
                return thread.id === id;
            })[0];
        };

        var onUpdate = function (updates) {
            updates.forEach(function (update) {
                var correspondingThread = self.getThreadById(update.thread.id);

                if (!correspondingThread) {
                    return;
                }

                correspondingThread.messages.push(update.thread.messages.slice(correspondingThread.messages.length));

                correspondingThread.unread = (update.thread.id !== activeThread.id);
            });

            self.trigger(self.EventType.UPDATE, updates);

            setupUpdates();
        };

        var setupUpdates = function () {
            $timeout(function () {
                ChatUndertaker.getUpdates().then(function (response) {
                    var updates = response.data;

                    onUpdate(updates);
                });
            }, 1000);
        };

        self.owner = {};
        var getOwner = function () {
            ChatUndertaker.getOwner().then(function (response) {
                self.owner = response.data;
            });
        };

        getOwner();
        getThreads();
        setupUpdates();
    });
