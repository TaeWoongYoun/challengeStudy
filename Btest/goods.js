var data = [
    {idx: 1, img: "goods/01.jpg", sale: 12000, title: "바지", price: "3,500", group: "의류"},
    {idx: 2, img: "goods/02.jpg", sale: 17500, title: "티셔츠", price: "23,000",group: "의류"},
    {idx: 3, img: "goods/03.jpg", sale: 1500, title: "키링", price: "13,500", group: "악세사리"},
    {idx: 4, img: "goods/04.jpg", sale: 17511, title: "응원풍선", price: "12,500", group: "응원도구"},
    {idx: 5, img: "goods/05.jpg", sale: 12456, title: "글러브", price: "7,500", group: "야구용품"},
    {idx: 6, img: "goods/06.jpg", sale: 17454, title: "헬멧", price: "143,500", group: "야구용품"},
    {idx: 7, img: "goods/07.jpg", sale: 27000, title: "베트", price: "32,500", group: "야구용품"},
    {idx: 8, img: "goods/08.jpg", sale: 1484, title: "모자", price: "7,500", group: "의류"},
    {idx: 9, img: "goods/09.jpg", sale: 54267, title: "세트", price: "115,500", group: "야구용품"},
    {idx: 10, img: "goods/10.jpg", sale: 7267, title: "체육복바지", price: "10,000", group: "의류"}
];

function displayProducts(products){
    $(".product").empty();
    products.forEach(product => {
        let goods = `
            <div class="card">
                <img src="${product.img}" alt="">
                <div class="textBox">
                    <h2>${product.title}</h2>
                    <p>그룹 : ${product.group}</p>
                    <p>판매량 : ${product.sale}</p>
                    <button>가격 : ${product.price}</button>
                </div>
            </div>`
        $(".product").append(goods);
    });
}
data.sort((a,b) => b.sale - a.sale);
displayProducts(data);

$("#price").click(function(){
    data.sort((a,b) => parseInt(a.price.replace(",", ""), 10) - parseInt(b.price.replace(",", ""), 10));
    displayProducts(data);
})

$("#sale").click(function(){
    data.sort((a,b) => a.sale - b.sale);
    displayProducts(data);
})

$("#sale2").click(function(){
    data.sort((a,b) => b.sale - a.sale);
    displayProducts(data);
})

$("#modal").click(function(){
    $(".back").show();
})

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
            }
        });
        input.click();
    });

    $("#textBtn").click(function(){
        $(".textContainer").show();
    })

    $("#addTextBtn").click(function(){
        var text = $(".textInput").val().trim();
        if (text !== ""){
            $(".imgContainer").append($("<p>").addClass("text-on-image").text(text));
            $(".textContainer").hide();
        }
    })

    $("#rotateBtn").click(function(){
        $(".text-on-image").toggleClass("rotate");
    })

    $(document).on("mousedown", ".text-on-image", function(event){
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
        if (event.ctrlKey && event.keyCode === 39){
            $(".text-on-image").each(function(){
                let rotation = ($(this).data("rotation") || 0 ) + 90;
                $(this).css("transform", "rotate(" + rotation + "deg)").data("rotation", rotation);
            })
        }
    });

    $("#resetBtn, #deleteBtn").click(function(){
        $(".text-on-image").remove();
        $(".textContainer").hide();
        if (this.id === "deleteBtn") $(".imgContainer").remove();
    })
})