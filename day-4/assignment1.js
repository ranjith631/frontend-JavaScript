//librabry membership
var membership="Basic";
switch (membership) {
    case "Basic":
        console.log("Access to free books");
        
        break;
    case "Standard":
        console.log("Access to all Books including Exclusive Content.");
        break;
    case "Premium" :
        console.log("access with discount.");
         break
    default:"not valid";
        break;
}