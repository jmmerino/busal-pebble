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
            if (arguments && arguments.length > 1) {
                var parameters = Array.prototype.slice.call(arguments, 1);                
                queue[i].apply(this, parameters);
            } else {
                queue[i]();
            }
            
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
    