angular.module('ChatUnion')
    .controller('ThreadListRepresentative', function (ChatRegime) {
        var self = this;

        ChatRegime.threads.then(function (threads) {
            self.threads = threads;
        });
    });
