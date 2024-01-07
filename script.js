var f1 = fetch("https://restcountries.com/v3.1/all");
f1.then((data)=>data.json()).then((data1)=>foo(data1));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";


function foo(data1){
    console.log(data1)
    for(var i=0; i<data1.length; i++){
        var col = document.createElement("div");
         col.className = "col-md-4";
        col.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Country Name:${data1[i].name.common}</h5>
          <p class="card-text"><b>Capital:${data1[i].capital}<b></p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      row.append(col);
      container.append(row);
      document.body.append(container);
      
}
}
