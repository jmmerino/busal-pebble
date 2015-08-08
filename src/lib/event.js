(function() {

    var Event = {
        queue: {},
        fired: []
    };

    Event.trigger = function(event) {
        var queue = this.queue[event];

        if (typeof queue === 'undefined') {
            return;
        }

        for (var i = 0; i < queue.length; i++) {
            arguments.shift();
            queue[i](arguments);
        }                
    };

    Event.on = function(event, callback) {        
        if (typeof this.queue[event] === 'undefined') {
            this.queue[event] = [];
        }

        this.queue[event].push(callback);
    };

    module.exports = Event;

})();
    