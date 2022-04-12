$(function(){
    $("input").on("click",function(){
        //alert("hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem)
         $("h1").text($("li").eq(randomChildNumber).text());
         document.getElementById("picture").src=randomChildNumber+".jpg"
    });
});
