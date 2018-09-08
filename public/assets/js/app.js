var imgSrcs = ["../../Images/1.jpg", "../../Images/2.jpg", "../../Images/3.jpg" , "../../Images/4.jpg" , "../../Images/5.jpg"];
setInterval(function() {
    $("#changeBack").css("background", "url(" + imgSrcs[imgSrcs.push(imgSrcs.shift())-1] + ")");
    $("#changeBack").css("background-size","100% 100%");
}, 5000); // 每5秒自动切换背景图片  



$(document).ready(function(){

    $("#searchSubmit").on("click",function(event){
        event.preventDefault();
    var searchInput = $("#searhInput").val().trim();
    

    $.get("/results/" + searchInput , function(result){
        // console.log("searchInputtttttt: " , searchInput);
        console.log(result);
        // console.log(result.dataInfo[0].vendorType);

        if(result.seccess){
            console.log("good");
            showAllVendor(result.dataInfo[0].vendorType);
        }else{
            alert("we don't have that Vendors");
        }

    })
       
      
        
    });


    function showAllVendor(vendorType){
        window.location.replace("/show/" + vendorType);
    }




});