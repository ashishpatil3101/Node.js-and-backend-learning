const  {EventEmitter}= require('events')

const event = new EventEmitter();

//registering an event listener for particular event
event.on("myevent", (tt)=>{
    console.log("event has occured "+tt )
})


//trigering an event 
event.emit("myevent" )

