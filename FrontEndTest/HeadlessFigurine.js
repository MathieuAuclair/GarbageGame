var expect = chai.expect;

describe("ClickEvent", function () {
    it("Should register a click box and react to click event", function () {
        var expected = true;
        var isClicked = false;
        var clickManager = new ClickManager();

        clickManager.suscribeClickBox(
            "button",
            new Rectangle(50, 50, 0, 0),
            function () {
                isClicked = true;
            }
        );

        var canvas = document.getElementById("canvas");
        var offSet = canvas.getBoundingClientRect();
        simulate(canvas, "click", {pointerX: 5, pointerY: (5 + offSet.top)});
        clickManager.unsubscribeClickBox("button");
        expect(isClicked).to.equal(expected);
    });

    it("Should unregister a click box", function () {
        var expected = false;
        var isClicked = false;
        var clickManager = new ClickManager();

        clickManager.suscribeClickBox(
            "button",
            new Rectangle(50, 50, 0, 0),
            function () {
                isClicked = true;
            }
        );

        clickManager.unsubscribeClickBox("button");

        var canvas = document.getElementById("canvas");
        var offSet = canvas.getBoundingClientRect();
        simulate(canvas, "click", {pointerX: 5, pointerY: (5 + offSet.top)});
        expect(isClicked).to.equal(expected);
    });
});


//<!--MOCKING-->

function simulate(element, eventName)
{
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType === 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
};

var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
};