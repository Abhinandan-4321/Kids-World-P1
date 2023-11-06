var cartCount = document.getElementById('cart-value')
var addButton = document.getElementsByClassName("button")
var count = 0;
var userdemand = []
var totalPrice = 0
// to update the cart items number
const items = [{
    name: "This was our pact",
    quant:0,
    image: "./assets/book1.png",
    price: 7.49
    
},
{
    name: "The Famous Five",
    quant: 0,
    image: "./assets/book2.png",
    price: 4.59
},
{
    name: "Matlida",
    quant: 0,
    image: "./assets/book3.png",
    price: 6.80
},
{
    name: "Harry Potter",
    quant: 0,
    image: "./assets/book4.png",
    price: 10
},
{
    name: "For Young Readers",
    quant: 0,
    img: "./assets/book5.png",
    price: 7.29
},
{
    name: "Wimpy Kid - DIY",
    quant: 0,
    img: "./assets/book6.png",
    price: 4.99
},
{
    name: "Dart Board",
    quant: 0,
    img: "./assets/dart-board.png",
    price: 17.49
},

{
    name: "Connect 4",
    quant: 0,
    img: "./assets/connect-four.png",
    price: 19.99
},

{
    name: "Jenga",
    quant: 0,
    img: "./assets/jenga.png",
    price: 20.99
},

{
    name: "Monopoly",
    quant: 0,
    img: "./assets/monopoly.png",
    price:19.49
},

{
    name: "Bookmarks",
    quant: 0,
    img: "./assets/bookmarks.png",
    price: 12.49
},

{
    name: "Birthday Card",
    quant: 0,
    img: "./assets/birthday-card.png",
    price: 19.99
},

{
    name: "Stuffed toys",
    quant: 0,
    img: "./assets/stuffed-toy.png",
    price: 15.99
},

{
    name: "Dream Catcher Drawing",
    quant: 0,
    img: "./assets/dream-catcher.png",
    price:18.49
}
]

console.log(count)
for(let i = 0; i< items.length; i++){
    addButton[i].addEventListener ("click", () =>{
        items[i].quant++;
        cartCount.innerHTML = ++count;

    } )
}

// var displaythings = document.getElementById('displaythings')
// var goaway = document.getElementById('goaway')
// var blur = document.getElementById('blur')
// var pop = document.getElementById('pop')

// For bringing the popup

var cartitembutton = document.getElementById("thisbutton")
cartitembutton.addEventListener("click", () =>{
    // displaythings.style.display = "block";
    // pop.style.display = "block";
    // goaway.style.display = "block";
    // blur.style.display = "block";
for(let i=0; i<items.length;i++){
    if(items[i].quant > 0){
        totalPrice += items[i].quant*items[i].price;
    }
}
var cents = (totalPrice * 100)%100;
var dollar = parseInt(totalPrice)//parseInt takes interger only
console.log("The Total price of the items is" + " " + dollar +" $" + "and " + cents+ " cents");
})

// For making the popup go away

// goaway.addEventListener("click", ()=>{
//     displaythings.style.display = "none";
//     pop.style.display = "none";
//     goaway.style.display = "none";
//     blur.style.display = "none";
// })
