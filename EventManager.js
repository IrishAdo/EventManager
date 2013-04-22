/*
 * Event manage allow the page to execute a data-action type event.
 */
var EventManager = {
    exec: function(thisObject,functionName) {
        var argumentCounter = $(thisObject).attr("data-argc");
        var args = new Array();
        args[args.length] = thisObject; // first parameter will be the button object
        for (var counter = 1; counter <= argumentCounter; counter++) {
            args[args.length] = $(thisObject).attr("data-argv" + counter);
        }

        //var args = Array.prototype.slice.call(arguments).splice(1);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        var ns = namespaces.join(".");

        if (ns === "") {
            ns = "window";
        }
        ns = eval(ns);
        return ns[func].apply(ns, args);
    },
    bind: function() {
        $(document).on("click", "[data-click]", function() {
            return EventManager.exec(this, $(this).attr("data-click"));
        });
        $(document).on("hover", "[data-hover]", function() {
            return EventManager.exec(this,$(this).attr("data-hover"));
        });
        $(document).on("change", "[data-change]", function() {
            return EventManager.exec(this,$(this).attr("data-change"));
        });
    }
};
$(document).ready(function() {
    EventManager.bind();
});
