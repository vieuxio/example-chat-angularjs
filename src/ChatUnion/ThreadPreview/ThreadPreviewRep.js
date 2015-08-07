angular.module('ChatUnion')
    .controller('ThreadPreviewRepresentative', function (ChatRegime, EventEmitter) {
        angular.extend(this, EventEmitter);

        var self = this;

        self.lastMessage = self.threadData.messages.slice(-1);

        self.setActiveThread = function () {
            ChatRegime.setActiveThread(self.threadData);
        };

        ChatRegime.bind('ACTIVE_THREAD_CHANGED', function () {
            var activeThread = ChatRegime.getActiveThread();

            if (activeThread.id == self.threadData.id) {
                self.trigger('THREAD_ACTIVATED');
            } else {
                self.trigger('THREAD_DEACTIVATED');
            }
        });
    });
