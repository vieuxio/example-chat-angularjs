'use strict';

// FIXME: This is not related to Chat Union. It should move a seperate Union
angular.module('ChatUnion')
    // EventEmitter: Derived from http://notes.jetienne.com/2011/03/22/microeventjs.html
    .factory('EventEmitter', function () {

        return function () {
            this._events = {};
            this.bind = function(event, fct) {
                this._events[event] = this._events[event] || [];
                this._events[event].push(fct);
            };

            this.unbind = function(event, fct) {
                if (event in this._events === false) {
                        return;
                }
                this._events[event].splice(this._events[event].indexOf(fct), 1);
            };

            this.trigger = function(event /* , args... */) {
                if (event in this._events === false) {
                    return;
                }

                for(var i = 0; i < this._events[event].length; i++){
                    this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
                }
            };
        };
    });
