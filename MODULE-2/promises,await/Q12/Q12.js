function timer(duration,completed) {
    setTimeout(() => {
        completed(`timer of ${duration}ms is done`);
    }, duration);
}
timer(2000,(message)=>{
    console.log(message);
});
