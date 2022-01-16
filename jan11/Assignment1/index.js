console.log("console");
var n = parseInt(prompt("Enter Number of Rows We want"));

for(var i = 1;i<=n;i++){
    for(var j = 1;j<=i;j++){
        document.write("*"," ");
    }
    document.write("<br>");
}

