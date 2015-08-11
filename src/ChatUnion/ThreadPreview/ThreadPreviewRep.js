angular.module('ChatUnion')
    .controller('ThreadPreviewRepresentative', function (ChatRegime, EventEmitter) {
        angular.extend(this, new EventEmitter());

        var self = this;

        self.threadData.lastMessage = self.threadData.messages.slice(-1)[0];

        self.setActiveThread = function () {
            ChatRegime.setActiveThread(self.threadData);
        };

        ChatRegime.bind(ChatRegime.EventType.SET_ACTIVE_THREAD, function () {
            var activeThread = ChatRegime.getActiveThread();

            self.threadData.active = (activeThread.id == self.threadData.id);
        });

        ChatRegime.bind(ChatRegime.EventType.UPDATE, function (updates) {
            updates.some(function(update) {
                if (update.thread.id != self.threadData.id) return;

                self.threadData.lastMessage = update.thread.messages.slice(-1)[0];

                return true;
            });
        });
    });
