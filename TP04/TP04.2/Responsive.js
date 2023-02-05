const ProductText=[
    {
        title:"Buttermilk Pancaked",
        price:"$15.99",
        description:"I'm baby woe mlkshk wolf bitters live-ecge blue bottle.hammock freegan copper mug whatever cold-pressed"
    },
    {
        title:"Dinner Double",
        price:"$6.99",
        description:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing Marta thundercats"
    },
    {
        title:"Godzilla Milkshake",
        price:"$6.99",
        description:"ombucho chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral,"
    },
    
]
const pancake1=fetch("https://source.unsplash.com/random/500x300/?pancake-butter");
const milkshake1=fetch("https://source.unsplash.com/random/500x300/?milkshake");
const pancake2=fetch("https://source.unsplash.com/random/500x300/?pancake");

Promise.all([pancake1,burger1,milkshake1,pancake2,burger2,milkshake2]).then(data=>{
    return Promise.all(data.map(r=>r.url))
}).then(datas=>{
    let tmpHtml=""
    let i=0;
    datas.forEach(item=>{
        tmpHtml+=`         <div class="menu">
        <div class="img">
            <img src="${item}" alt="${ProductText[i].title}">
        </div>
        <div class="infor">
            <div class="name">${ProductText[i].title}</div>
            <div class="price">${ProductText[i].price}</div>
            <div class="description">${ProductText[i].description}</div>
        </div>
    </div>`
    i++
    })
    document.getElementById("products").innerHTML=tmpHtml
})
.catch(err=>console.error(err))
