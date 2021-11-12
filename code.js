$(setUp);


function setUp(){
    $("input[type=submit]").on("click",addItem);
    $("ul").on("click","span",removeItem);
    $("button#clearButton").on("click",clearList);
}


function addItem(event){
    event.preventDefault();

    let item = $("#itemInput").val();

    $("ul#shoppingList").append(`<li>${item}</li> <span>Remove</span><br>`);

    $("#itemInput").val("");
}


function removeItem(event){
    let boughtItem = $(event.target.previousElementSibling).remove();
    $(event.target.nextSibling).remove();
    $(event.target).remove();
    console.log(boughtItem);
    $("ul#boughtItems").append(boughtItem);
}

function clearList(){
    let boughtItems = $("ul#shoppingList li").remove();
    $("ul#boughtItems").append(boughtItems);
}