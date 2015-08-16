angular.module('ChatUnion')
    .controller('ThreadsPopoverRepresentative', function (ChatRegime) {
        this.setActiveThread = function (thread) {
            ChatRegime.addChatBox(thread);
        };
    });
