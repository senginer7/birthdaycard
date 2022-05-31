// window.onload(function(){
//     new Audio("Birthday song.mp3").play();
// })
// $(document).ready(function() {
//     $("#tah_audio").get("Birthday-song.mp4").play();
// });

$(".curtainp").click(function(){
    $("#curtain1").animate({width:20},1000);
    $("#curtain2").animate({width:20},1000);
    new Audio("Birthday-song.mp4").play();
});