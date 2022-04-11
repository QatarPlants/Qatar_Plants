let Sales = [
    {
        id: 1, name: "Sun Flower", releaseDate: new Date(1990, 1, 1), cost: 34, category: 'In Door', stock: 5, status: 'Available', color: 'Yellow', sun: 'Low', water: '2 times a day', size: 'Small', salePercent: 10,
        image: './imgs/product1.jpg', des: 'Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers.'
    },
    {
        id: 2, name: "Lilium", releaseDate: new Date(1990, 1, 1), cost: 28, category: 'In Door', stock: 5, status: 'Available', color: 'White', sun: 'Medium', water: '3 times a day', size: 'Medium', salePercent: 10,
        image: './imgs/product2.jpg', des: 'Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies..'
    }, {
        id: 3, name: "Rose", releaseDate: new Date(1990, 1, 1), cost: 50, category: 'In Door', stock: 6, status: 'Available', color: 'Red', sun: 'Low', water: '1 times a day', size: 'Small', salePercent: 10,
        image: './imgs/product3.jpg', des: 'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. '
    }

]

console.log(Sales);

function showResult2() {
    const out = document.querySelector("#result");
    //const totalCost = document.querySelector("#totalCost");
    let result = ``;

    Sales.map((x) => result += `<div class="card" style="width:31%; float: left; margin-left:15px; margin-top: 10px" ><img class="card-img-top" src="${x.image}" alt="Card image" width="100%" height="400px"><div class="card-body">
            <h4 class="card-title">${x.name}  <a href="#" class="btn btn-primary stretched-link">Buy</a> </h4><p class="card-text"> 
${x.category}   ${x.cost}$    ${x.status}   ${salePrice(x.salePercent, x.cost)}$</p>

        </div></div>`)
    out.innerHTML = result
}

showResult2()

function salePrice(percent, cost){
    price = cost  - (percent/100 *cost)
    return price
}