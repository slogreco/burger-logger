$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        const newBurger = {
            name: $("#burgerName").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Burger successfully created!");
            location.reload();
        }
        );
    });


    $(".devouredBurger").on("click", function (event) {
        event.preventDefault();
        const devouredBurger = {
            id: $(this).attr("data-id")
        };
        console.log(devouredBurger);
        $.ajax("/api/burgers/" + devouredBurger.id, {
            type: "PUT",
            data: devouredBurger
        }).then(function () {
            console.log("Burger successfully created!");
            location.reload();
        }
        );
    });
});