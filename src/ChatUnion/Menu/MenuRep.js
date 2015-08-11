angular.module('ChatUnion')
    .controller('MenuRepresentative', function (ChatRegime) {
        var self = this;

        ChatRegime.bind(ChatRegime.EventType.UPDATE, function () {
            self.count = ChatRegime.getUnreadCount();
        });

        ChatRegime.bind(ChatRegime.EventType.SET_ACTIVE_THREAD, function () {
            self.count = ChatRegime.getUnreadCount();
        });

    });
