import addToCart from './cart'

let Products = [
    {
        id: 1, name: "Sun Flower", releaseDate: new Date(1990, 1, 1), cost: 34, category: 'In Door', stock: 5, status: 'Available', color: 'Yellow', sun: 'Low', water: '2 times a day', size: 'Small',
        image: './imgs/product1.jpg', des: 'Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers.'
    },
    {
        id: 2, name: "Lilium", releaseDate: new Date(1990, 1, 1), cost: 28, category: 'In Door', stock: 5, status: 'Available', color: 'White', sun: 'Medium', water: '3 times a day', size: 'Medium',
        image: './imgs/product2.jpg', des: 'Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies..'
    }, {
        id: 3, name: "Rose", releaseDate: new Date(1990, 1, 1), cost: 50, category: 'In Door', stock: 6, status: 'Available', color: 'Red', sun: 'Low', water: '1 times a day', size: 'Small',
        image: './imgs/product3.jpg', des: 'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. '
    }, {
        id: 2, name: "Lilium", releaseDate: new Date(1990, 1, 1), cost: 28, category: 'In Door', stock: 5, status: 'Available', color: 'White', sun: 'Medium', water: '3 times a day', size: 'Medium',
        image: './imgs/product2.jpg', des: 'Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies..'
    }, {
        id: 1, name: "Sun Flower", releaseDate: new Date(1990, 1, 1), cost: 34, category: 'In Door', stock: 5, status: 'Available', color: 'Yellow', sun: 'Low', water: '2 times a day', size: 'Small',
        image: './imgs/product1.jpg', des: 'Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers.'
    }, {
        id: 3, name: "Rose", releaseDate: new Date(1990, 1, 1), cost: 50, category: 'In Door', stock: 6, status: 'Available', color: 'Red', sun: 'Low', water: '1 times a day', size: 'Small',
        image: './imgs/product3.jpg', des: 'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. '
    }

]

console.log(Products);

function showResult() {
    const out = document.querySelector("#result");
    //const totalCost = document.querySelector("#totalCost");
    let result = ``;

    Products.map((x) => result += `<div class="card" style="width:31%; float: left; margin-left:15px; margin-top: 10px" ><img class="card-img-top" src="${x.image}" alt="Card image" width="100%" height="400px"><div class="card-body">
            <h4 class="card-title">${x.name} <a href="#" class="btn btn-primary stretched-link" onclick="${addToCart(x.id)}">Buy</a> </h4><p class="card-text"> 
${x.category}   ${x.cost}$    ${x.status}</p>

        </div></div>`)
    out.innerHTML = result
}



showResult()



function productSearsh() {
    const out = document.querySelector("#result").value;
    const name = document.getElementById("productSearsh").value;
    console.log(name);
    out.innerHTML = name

}






