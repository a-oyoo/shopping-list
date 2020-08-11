'use strict';

function shoppingChecklist() {
    // add item to shopping list
    $("#shopping-list-form").submit(function(event) {
        // stop default form submission behavior
        event.preventDefault();
        // s
        const shoppingItem = $(".js-shopping-list-entry").val;

        $("#shopping-list-entry").val("");

        $(".shopping-list").append(`
            <li>
                <span class="shopping-item">${shoppingItem}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`);

    });
    // check item on shopping list
    // uncheck item from shopping list
    $(".shopping-list").on("click", ".shopping-item-delete", $(this).closest("li").remove());

    // remove item from shopping list
    $(".shopping-list").on("click", ".shopping-item-toggle", $(this).closest("li").find(".shopping-item").toggleClass);


}

shoppingChecklist()