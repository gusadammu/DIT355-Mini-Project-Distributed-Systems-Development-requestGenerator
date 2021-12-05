var publisher = require("./src/publisher.js");
var Generator = require('./src/generator.js');

let generate = new Generator();

var reqId = 0;

//Set pump settings



publisher.start(); //starts the publisher.js module

setInterval(function() {

    var generatedMsg = generate.generate(reqId);
    reqId++;
    try {
        console.log(generatedMsg)
        publisher.publish(generatedMsg);

    } catch (error) {
        console.log(error.message)

    }
}, 500);