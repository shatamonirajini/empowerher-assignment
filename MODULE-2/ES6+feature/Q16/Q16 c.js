const greet=(name)=>{
    console.log("Hello, " + (name ? name:"Guest"));
};

greet("Alice");
greet();