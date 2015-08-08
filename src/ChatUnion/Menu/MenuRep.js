angular.module('ChatUnion')
    .controller('MenuRepresentative', function (ChatRegime) {
        var self = this;

        ChatRegime.bind(ChatRegime.EventType.UPDATE, function (updates) {
            self.count = ChatRegime.getUnreadCount();
        });

    });
