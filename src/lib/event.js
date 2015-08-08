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
            queue[i]();
        }        

        // this.fired[event] = true;
    };

    Event.on = function(event, callback) {
        // if (this.fired[event] === true) {
        //     return callback();
        // }

        if (typeof this.queue[event] === 'undefined') {
            this.queue[event] = [];
        }

        this.queue[event].push(callback);
    };

    module.exports = Event;

})();
    