$(document).ready(function () {

    $("#load-songs").on("click", function (e) {
        $.ajax("songs.json")
            .then(response => {
                //songObj = JSON.parse(response);
                response.songs.forEach(element => {
                    //const section = $("<section></section>").addClass("song");
                    $("#song-list")
                        .append($("<section class='song'></section>")
                            .append($(`<h1 class='song__title'>${element.title}</h1>`))
                            .append($("<section class='song__description'></section>")
                                .text(`Performed by ${element.artist} on the album ${element.album}`)
                            )
                        )
                });
            })
    })
})

// Practice: Product Ordering
// Your task is to simulate a product listing page like you would find on Etsy, Amazon, or Ebay. This application should implement the following features.

// Display an individual product component. Each product should have a title, short description, price, quantity, and an image.
// Display the application information in a navigation bar at the top of the page.
// The name of the company - Betsy
// Three links: Categories, Orders, and Log Out (_these links won't actually do anything, you're just practicing making the navigation bar a component)
// Display a review list component that contains a maximum of 3 product review components beneath a product. You can use hipster ipsum for the reviews themselves.