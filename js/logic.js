$("input").on("keypress", function(e){
    if(e.which == 13) {
       addItem();
    }
});

$("button").on("click", function(e){
       addItem();
});


function addItem() {
    $("ul").append('<li class="list-group-item">'+ $("input").val() +'</li>');
    $("input").val('');
}