angular.module('ChatUnion')
    .controller('MotherPaneRepresentative', function (ChatRegime) {
        this.setActiveThread = function (thread) {
            ChatRegime.setActiveThread(thread);
        };
    });
