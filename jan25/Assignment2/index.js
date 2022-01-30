var card = document.getElementById("card")
var cards;
var h4,p1,p2,p3,btn;


 var url = "https://api2.binance.com/api/v3/ticker/24hr"
fetch(url)
.then((something) => something.json())
.then((anything) => {
    // write some functionality
    for(i=0;i<100;i++){
        cards = document.createElement("div")
        h4 = document.createElement("h4")
        p1 = document.createElement("p")
        p2 = document.createElement("p")
        p3 = document.createElement("p")
        btn = document.createElement("button")
        btn.innerText="Open"
        cards.classList = "card";
        h4.innerText=anything[i].symbol;
        p1.innerText=anything[i].priceChange;
        p2.innerText=anything[i].priceChangePercent + " %";
        p3.innerText=Math.round(anything[i].bidQty);
        cards.append(h4,p1,p2,p3,btn)
        cards.style.textAlign = "center"
        cards.style.paddingTop ="20px"
        cards.style.fontSize ="20px"
        cards.style.fontWeight ="900"
        card.append(cards)
        
    }
    
});