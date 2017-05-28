var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('load', this.onLoad, false);
    },

    // load Event Handler
    onLoad: function() {

    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.getElementById('buttonsay').addEventListener('click', app.onButtonClick);
    },

    // button click callback
    onButtonClick: function() {
        var textInput = document.getElementById('textwhatever').value;
        document.getElementById('stuff').innerHTML = textInput;
    },

    // IDEA Download something from the internet; save data on device; include a library here
};

app.initialize();
