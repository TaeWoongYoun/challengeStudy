$(document).ready(function(){
    $("#addBtn").click(function(){
        var input = $("<input>").attr({type: "file", accept: "image/*"}).on("change", function(event){
            var file = event.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(){
                    $(".area").append($("<div>").addClass("imgContainer").append($("<img>").attr("src", reader.result)));
                }
                reader.readAsDataURL(file);
            };
        });
        input.click();
    });

    $("#textBtn").click(function(){
        $(".textContainer").show();
    });

    $("#addTextBtn").click(function(event){
        var text = $("#textBox").val().trim();
        if (text !== ""){
            $(".imgContainer").append($("<p>").addClass("text-on-image").text(text));
            $(".textContainer").hide();
        }
    });

    $("#rotateBtn").click(function(){
        $(".text-on-image").toggleClass("rotate");
    });

    $(document).on("mousedown", ".text-on-image",function(event){
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        initialLeft = $(this).position().left;
        initialTop = $(this).position().top;
    }).on("mouseup", function(){
        isDragging = false;
    }).on("mousemove", function(event){
        if (isDragging) {
        let offsetX = event.clientX - startX;
        let offsetY = event.clientY - startY;
        $(".text-on-image").css({left: initialLeft + offsetX + "px", top: initialTop + offsetY + "px"});
        }
    }).on("keydown", function(event){
        if (event.ctrlKey && event.keyCode === 39) {
            $(".text-on-image").each(function(){
                let rotation = ($(this).data("rotation") || 0 ) + 90;
                $(this).css("transform", "rotate(" + rotation + "deg)").data("rotation", rotation);
            });
        }
    });

    $("#resetBtn, #deleteBtn").click(function(){
        $(".text-on-image").remove();
        $(".textContainer").hide();
        if (this.id === "deleteBtn") $(".imgContainer").remove();
    })
});