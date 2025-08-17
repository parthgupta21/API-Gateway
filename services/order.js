async function getOrder(id){
    return{
        id,
        item:"Laptop",
        price: 1200, 
        status: "Shipped"
    }
}

module.exports = {getOrder};
