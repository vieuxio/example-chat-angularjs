angular.module('ChatUnion')
    .controller('ChatPaneRepresentative', function (ChatRegime) {
        var self = this;

        self.owner = ChatRegime.owner;

        ChatRegime.bind(ChatRegime.EventType.SET_ACTIVE_THREAD, function () {
            self.thread = ChatRegime.getActiveThread();
            self.user = self.thread.user;
        });

    });
