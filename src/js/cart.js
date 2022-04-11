
Carts= []

export function addToCart(productId){
        console.log(Products[productId-1]);
        Carts.push(Products[productId-1])
        console.log(Carts);
        showResult2()
}


function showResult2() {
    const item = document.querySelector("#item");
    //const totalCost = document.querySelector("#totalCost");
    let output = ``;

    Carts.map((x) => output += `<div class="card" style="width:31%; float: left; margin-left:15px; margin-top: 10px" ><img class="card-img-top" src="${x.image}" alt="Card image" width="100%" height="400px"><div class="card-body">
            <h4 class="card-title">${x.name} <a href="#" class="btn btn-primary stretched-link" onclick="addToCart(${x.id})">Buy</a> </h4><p class="card-text"> 
${x.category}   ${x.cost}$    ${x.status}</p>

        </div></div>`)
        item.innerHTML = output
}


