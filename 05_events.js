import {EventEmitter} from 'events';
const booking = new EventEmitter();

booking.on("booked", (user) => {
    console.log(`Email sent to ${user}`);
});

booking.addListener("booked", (user) =>{
    console.log(`Ticket Generated for ${user}`);
    
})

booking.addListener("booked", (user, seatType) =>{
    console.log(`Booking recorded in the system for ${user}, seatType-${seatType}`);
    
})

