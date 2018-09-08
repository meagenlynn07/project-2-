var imgSrcs = ["../../Images/1.jpg", "../../Images/2.jpg", "../../Images/wedding-groom-1600.jpg" , "../../Images/4.jpg" , "../../Images/5.jpg"];
setInterval(function() {
    $("#changeBack").css("background", "url(" + imgSrcs[imgSrcs.push(imgSrcs.shift())-1] + ")");
    $("#changeBack").css("background-size","100% 100%");
}, 5000); // 每5秒自动切换背景图片  



$(document).ready(function(){

    $("#searchSubmit").on("click",function(event){
        event.preventDefault();
        var searchInput = $("#searhInput").val().trim();
        var vendorType = $('#vendorType option:selected').val().toLowerCase();
        console.log(vendorType + " " + searchInput);
    $.get("/results/" + vendorType + "/" + searchInput , function(result){
        // console.log("searchInputtttttt: " , searchInput);
        console.log(result);
        // console.log(result.dataInfo[0].vendorType);
        let searchResult;var imgSrcs = ["../../Images/1.jpg", "../../Images/2.jpg", "../../Images/wedding-groom-1600.jpg" , "../../Images/4.jpg" , "../../Images/5.jpg"];
        setInterval(function() {
            $("#changeBack").css("background", "url(" + imgSrcs[imgSrcs.push(imgSrcs.shift())-1] + ")");
            $("#changeBack").css("background-size","100% 100%");
        }, 5000); // 每5秒自动切换背景图片  
        
        
        
        $(document).ready(function(){
        
            $("#searchSubmit").on("click",function(event){
                event.preventDefault();
                var searchInput = $("#searhInput").val().trim();
                var vendorType = $('#vendorType option:selected').val().toLowerCase();
                console.log(vendorType + " " + searchInput);
            $.get("/results/" + vendorType + "/" + searchInput , function(result){
                // console.log("searchInputtttttt: " , searchInput);
                console.log(result);
                // console.log(result.dataInfo[0].vendorType);
                let results;
                if(result.success){
                    // searchResult = true;
                    console.log("good");
                    showAllVendor(result.dataInfo[0].vendorType);
                    results = 'true';
                    resetSearch();
                } else{
                    // searchResult = false;
                    //alert("we don't have that Vendors");
                    noResult();
                    results = 'false';
                    resetSearch();
                }
        
                }) 
            });
        
            function resetSearch(){
                $("#searhInput").val("").attr("placeholder", "Search");;
                $('#vendorType').val("null");
            }
            function showAllVendor(vendorType){
                window.location.replace("/show/" + vendorType);
            }
        
            function noResult(searchInput){
                $('#searchFail').addClass('show');
            }
        
        
        
        });
        if(result.success){
            // searchResult = true;
            console.log("good");
            showAllVendor(result.dataInfo[0].vendorType);
            resetSearch();
        } else{
            // searchResult = false;
            //alert("we don't have that Vendors");
            noResult();
            resetSearch();
        }

        }) 
    });

    function resetSearch(){
        $("#searhInput").val("").attr("placeholder", "Search");;
        $('#vendorType').val("null");
    }
    function showAllVendor(vendorType){
        window.location.replace("/show/" + vendorType);
    }

    function noResult(searchInput){
        $('#searchFail').addClass('show');
    }

});