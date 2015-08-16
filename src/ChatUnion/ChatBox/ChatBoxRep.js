angular.module('ChatUnion')
    .controller('ChatBoxRepresentative', function (ChatRegime) {
        var self = this;

        self.close = function () {
            ChatRegime.removeChatBox(self.threadData);
        }
    });
