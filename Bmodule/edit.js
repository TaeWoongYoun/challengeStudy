$(document).ready(function(){
    $("#addBtn").click(function(){
        var input = $("<input>").attr({type: "file", accept: "image/*"}).on("change", function(event){
            var file = event.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(){
                    $(".area").append($("<div>").addClass("imgContainer").append($("<img>").attr("src", reader.result)));
                };
                reader.readAsDataURL(file);
            };
        });
        input.click();
    });

    $("#textBtn").click(function(){
        $(".textContainer").show();
    });

    $("#addTextBtn").click(function(){
        var text = $("#textBox").val().trim();
        if (text !== ""){
            $(".imgContainer").append($("<p>").addClass("text-on-image").text(text));
            $(".textContainer").hide();
        }
    })
})