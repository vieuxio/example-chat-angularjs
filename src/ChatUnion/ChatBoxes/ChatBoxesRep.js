angular.module('ChatUnion')
    .controller('ChatBoxesRepresentative', function (ChatRegime) {
        var self = this;

        self.activeChatBoxes = [];

        ChatRegime.bind(ChatRegime.EventType.ADD_CHAT_BOX, function (thread) {
            self.activeChatBoxes.push(thread);
        });

        ChatRegime.bind(ChatRegime.EventType.REMOVE_CHAT_BOX, function (thread) {
            self.activeChatBoxes = self.activeChatBoxes.filter(function (item) {
                return item.id !== thread.id;
            });
        });

    });
