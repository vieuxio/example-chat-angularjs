angular.module('ChatUnion')
    .controller('ChatPaneRepresentative', function (ChatRegime) {
        var self = this;

        if (self.threadId) {
            self.thread = ChatRegime.getThreadById(self.threadId);
            self.user = self.thread.user;
        }

        ChatRegime.owner.then(function (owner) {
            self.owner = owner;
        });

        ChatRegime.bind(ChatRegime.EventType.SET_ACTIVE_THREAD, function () {
            self.thread = ChatRegime.getActiveThread();
            self.user = self.thread.user;
        });

    });
