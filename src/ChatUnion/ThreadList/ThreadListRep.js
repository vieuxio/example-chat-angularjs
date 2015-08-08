angular.module('ChatUnion')
    .controller('ThreadListRepresentative', function (ChatRegime) {
        var self = this;

        ChatRegime.bind(ChatRegime.EventType.INITIAL_DATA, function (threads) {
            self.threads = threads;
        });
    });
