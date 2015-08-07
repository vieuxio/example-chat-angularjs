'use strict';

// FIXME: This is not related to Chat Union. It should move a seperate Union
angular.module('ChatUnion')
    // EventEmitter: Derived from http://notes.jetienne.com/2011/03/22/microeventjs.html
    .factory('EventEmitter', function () {
        var _events = {};

        return {
            bind: function(event, fct){
                _events[event] = _events[event]   || [];
                _events[event].push(fct);
            },
            unbind  : function(event, fct){
                if (event in _events === false) {
                    return;
                }
                _events[event].splice(_events[event].indexOf(fct), 1);
            },
            trigger : function(event /* , args... */){
                if (event in _events === false) {
                    return;
                }

                for(var i = 0; i < _events[event].length; i++){
                    _events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
                }
            }
        };
    });
