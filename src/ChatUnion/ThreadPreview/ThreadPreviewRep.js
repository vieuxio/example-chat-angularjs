angular.module('ChatUnion')
    .controller('ThreadPreviewRepresentative', function (ChatRegime) {
        var self = this;

        ChatRegime.getThreads().then(function (threads) {
            self.threads = threads;
        });
    });
