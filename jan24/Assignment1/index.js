var div = document.getElementById('center');
var divt = document.getElementById('title');
var tr = document.createElement("tr");
// var table = document.createElement("table");
// var tr = document.createElement("tr");
// var td1 = document.createElement("td");
// var tdn = document.createElement("td");
// var tdc = document.createElement("td");


var h1 = document.createElement("h1")
h1.innerText = "Data fetched From bitcoin api";
divt.appendChild(h1);
h1.style.color="white";

var table = document.getElementById("table");



// var th1 = document.createElement("th")
// var th2 = document.createElement("th")
// var th3 = document.createElement("th")
// th1.innerText = "Symbol"
// th1.innerText = "Prize"
// th1.innerText = "value"
// var tr = document.createElement("tr");;
// table.append(tr).append(th1,th2,th3);

 var url = "https://api2.binance.com/api/v3/ticker/24hr"
 fetch(url)
 .then((something) => something.json())
 .then((anything) => {
     // write some functionality
     for(i=0;i<30;i++){
          tr = document.createElement("tr");
          td1 = document.createElement("td");
          td2 = document.createElement("td");
          td3 = document.createElement("td");
          td1.innerText = anything[i].symbol;
          td2.innerText = anything[i].openPrice;
          td3.innerText = anything[i].count;
        // tr.appendChild(td1).appendChild(td2).appendChild(td3);
        table.appendChild(tr);
        tr.append(td1, td2, td3);
        
     }
     
 });
//  div.appendChild(table);
//  table.appendChild(tr);
//  tr.appendChild(tdn, tdv);




 
 

 