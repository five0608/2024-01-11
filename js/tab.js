$(function(){
    $(".n-g-list>a").click(function(){
        console.log("클릭")
        $(".tab-content").hide();
        $(this.hash).show().css({"display":"flex"})
    });
});