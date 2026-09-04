// IIFE

(function chai(){
    console.log(`DB Managed`);
})();


//Never forget the semicolon when calling two iife function

((name) => {
    console.log(`BD CONNECTED ${name}`);
})('Udit')
// Global scope ke pollution se problrm hoti h keyi baar to us pollution ko htane ke liye humne iife ka use kiya

