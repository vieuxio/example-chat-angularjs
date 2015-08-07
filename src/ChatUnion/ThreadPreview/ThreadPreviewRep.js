angular.module('ChatUnion')
    .controller('ThreadPreviewRepresentative', function (ChatRegime) {
        this.lastMessage = this.threadData.messages.slice(-1);
    });
