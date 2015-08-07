'use strict';

angular.module('ChatUnion')
    .factory('UserStereotype', function() {
        var UserStereotype = function (user) {
            this.gender = user.gender;
            this.name = user.name;
            this.picture = user.picture;
        };

        function capitalize(str) {
            return str[0].toUpperCase() + str.slice(1);
        }

        UserStereotype.prototype.getFullName = function() {
            return capitalize(this.name.first) + ' ' + capitalize(this.name.last);
        };

        return UserStereotype;
    });
