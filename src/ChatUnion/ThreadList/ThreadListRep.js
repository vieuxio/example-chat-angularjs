angular.module('ChatUnion')
    .controller('ThreadListRepresentative', function (ChatRegime) {
        var self = this;

        ChatRegime.getThreads().then(function (threads) {
            self.threads = threads;
        });
    });
