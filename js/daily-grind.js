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

//use location obj to access queryString (address bar)
const queryString = window.location.search;

//console output
console.log(queryString);

//Separate queryString paramaters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){
	//Use querry string to pull from previous day loadouts
	// Allows you to click on the day of the week in the nav panel to swap to a different day of the week
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
}else{
	//Use date object to set the website to current day
	// Sets the default day to the current day of the week when you first open the site.
    myDay = myDate.getDay();
}

switch (myDay) {
    case 0: // Sunday
        today = "Sunday";
        coffee = {
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            day: "Sunday",
            alt: "Picture of Drip Coffee",
            color: "brown",
            desc: "Start your week with a classic drip coffee. This timeless favorite is brewed to perfection, bringing out the rich, bold flavors of freshly ground coffee beans. Simple yet satisfying, it's the perfect pick-me-up for a relaxing Sunday morning."
        };
        break;

    case 1: // Monday
        today = "Monday";
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            day: "Monday",
            alt: "Picture of Pumpkin Spice Latte",
            color: "orange",
            desc: "Embrace the season with a pumpkin spice latte. Infused with warm spices like cinnamon, nutmeg, and cloves, this creamy treat is topped with whipped cream for an extra touch of indulgence. A comforting way to ease into the workweek."
        };
        break;

    case 2: // Tuesday
        today = "Tuesday";
        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            day: "Tuesday",
            alt: "Picture of Cold Brew",
            color: "blue",
            desc: "Cool down with a refreshing cold brew. This smooth, slow-brewed coffee highlights the natural sweetness and subtle flavor notes of the beans. Perfect for those who like their caffeine with a chill, it’s a great way to energize your Tuesday."
        };
        break;

    case 3: // Wednesday
        today = "Wednesday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            day: "Wednesday",
            alt: "Picture of Bubble Tea",
            color: "pink",
            desc: "Midweek calls for a fun bubble tea. This playful drink combines chewy tapioca pearls with sweet, milky tea, creating a unique texture and flavor experience. It’s the perfect treat to brighten up your Wednesday!"
        };
        break;

    case 4: // Thursday
        today = "Thursday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            day: "Thursday",
            alt: "Picture of Mocha",
            color: "#D2691E",
            desc: "Indulge in a rich and creamy mocha. Combining the deep flavors of espresso with velvety chocolate, this drink is topped with whipped cream for an irresistible treat. It's the perfect way to reward yourself as the weekend approaches."
        };
        break;

    case 5: // Friday
        today = "Friday";
        coffee = {
            name: "Frappuccino",
            pic: "images/frappuccino.jpg",
            day: "Friday",
            alt: "Picture of Frappuccino",
            color: "gray",
            desc: "Celebrate Friday with a sweet frappuccino. This icy blended coffee drink is topped with whipped cream and drizzled with syrup, offering a deliciously cool and sweet end to the week. Kickstart the weekend with every sip!"
        };
        break;

    case 6: // Saturday
        today = "Saturday";
        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            day: "Saturday",
            alt: "Picture of Caramel Latte",
            color: "yellow",
            desc: "Treat yourself to a caramel latte on Saturday. This smooth, creamy espresso drink is enriched with sweet caramel syrup and topped with frothy milk. It's a luxurious way to unwind and savor the weekend."
        };
        break;

    default:
        today = "Something went wrong";
}

//alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;

    return myReturn;
}