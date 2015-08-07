angular.module('ChatUnion')
    .factory('ThreadStereotype', function(UserStereotype) {
        var ThreadStereotype = function (thread) {
            this.id = thread.id;
            this.user = new UserStereotype(thread.user);
            this.messages = thread.messages;
            this.active = false;
            this.unread = false;
        };

        return ThreadStereotype;
    });
