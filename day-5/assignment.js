//display the message according the day.

var day="friday"
switch (day) {
    case "monday":
        console.log("Start your week strong!");
        break;
    case "tuesday":
        console.log("Keep going!");
        break;
    case "wednesday":
        console.log("Halfway there!");
        break;
    case "thursday":
        console.log("Almost the weekend!");
        break;
    case "friday":
        console.log("Happy Friday!");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy your weekend!");
        break;
    default:"invalid day"
        break;
}