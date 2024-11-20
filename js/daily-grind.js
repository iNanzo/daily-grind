/*
    daily-grind.js

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    Items needed for each drink:
    Name - i.e. bubble tea
    Pic - image of bubble tea
    Day - i.e. wednesday
    Alt - data in alt tag
    Color - color to match drink
    Desc - description of drink

*/
let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

switch(myDay){
    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
    break;

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";

        coffee ={
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            day: "Wednesday",
            alt: "Picture of Bubble Tea",
            color: "pink",
            desc: `I like me some bubble tea`
        };

    break;

    case 4:
        today = "Thursday";
    break;

    case 5:
        today = "Friday";
    break;

    case 6:
        today = "Saturday";
    break;

    default:
        Today = "Something went wrong";
}

alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

function coffeeTemplate(coffee){
    let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> Monday's daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;

    return myReturn;
}