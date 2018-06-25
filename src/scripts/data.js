const database = {
    products: {},
    reviews: {}
}

function* gen() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const generator = gen();
console.log(generator.next())

const createProduct = (title, description, price, quantity, img) => {
    //console.log(generator.next());
    database["products"][generator.next().value] = {test: "test"}
    // product.title = title;
    // product.descrpition = description;
    // product.price = price;
    // product.quantity = quantity;
    // product.img = img;
}

const createReview = (prodId, reviewString) => {
    if (database.reviews[prodId]) {
        database.reviews[prodId] = []
    }

    database.reviews[prodId].push(reviewString);

}

createProduct("ball","bouncy balls",10.99,4,"my/ball/URL");
createProduct("bat","sturdy bats",103.99,23,"my/bat/URL");

createReview(1,"this product is great");
createReview(1,"this product is really really awesome");
createReview(2,"this product sucks");

//title, short description, price, quantity, and an image.

module.exports = database;