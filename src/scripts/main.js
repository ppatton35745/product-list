const data = require("./data.js");

$(document).ready(function () {

    //songObj = JSON.parse(response);
    for (let productKey in data.products) {

        let product = data.products[productKey];
        let reviews = data.reviews[productKey];

        $("#products")
            .append($("<section class='product'></section>")
                .append($(`<h1 class='product_title'>${product.title}</h1>`))
                .append($("<section class='product_description'></section>")
                    .text(`We have ${product.quantity} ${product.description} that cost ${product.quantity} each`)
                )
            )

        if(reviews){
            $("#products")
                .append($("<section class='reviewSection'></section>")
                    .append($("<h1 class='review_title'>Reviews</h1>"))
                    .append($("<section class='reviews'></section>"))
                )

            reviews.forEach(review => {
                $("#products .reviewSection .reviews").append(review);
            });
        }

    }
})


// products: [{
//     title: "ball",
//     description: "bouncy ball",
//     price: 10.99,
//     quantity: 4,
//     img: "my/ball/URL"
// },

// Practice: Product Ordering
// Your task is to simulate a product listing page like you would find on Etsy, Amazon, or Ebay. This application should implement the following features.

// Display an individual product component. Each product should have a title, short description, price, quantity, and an image.
// Display the application information in a navigation bar at the top of the page.
// The name of the company - Betsy
// Three links: Categories, Orders, and Log Out (_these links won't actually do anything, you're just practicing making the navigation bar a component)
// Display a review list component that contains a maximum of 3 product review components beneath a product. You can use hipster ipsum for the reviews themselves.