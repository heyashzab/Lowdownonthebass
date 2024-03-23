$(document).ready(function(){
    $('#startBtn').on("click",function() {
        openGuide();
        $("#bassSlide").prop("currentTime", "0");
        $("#bassSlide").trigger("play");
        });
    function openGuide() {
        $("#startScreen").stop().animate({top:"-100vh"}, 1000, "swing");
        menuPage1();
    };
    $('.backStart').on("click",function() {
        reset();
        closeGuide();
    });
    function closeGuide() {
        $("#startScreen").stop().animate({top:"0"}, 500, "swing");
    };
    $('.page1').on("click",function() {
        bassPage();
    });
    $('.page2').on("click",function() {
        fenderPage();
    });
    $('.page3').on("click",function() {
        rolePage();
    });
    $('.page4').on("click",function() {
        stylesPage();
    });
    $('.page5').on("click",function() {
        playersPage();
    });
    $('.page6').on("click",function() {
        jamersonPage();
    });
    $('.page7').on("click",function() {
        grahamPage();
    });
    $('.page8').on("click",function() {
        jacoPage();
    });
    $('#jamersonPlay').on("click",function() {
        if (backTo == 6){
                jamersonSample();
        }
    });
	function jamersonSample() {
        $("#darlingClip, #darlingStripped").prop("currentTime", "0");
        $("#darlingStripped").prop("volume", 0);
        $("#darlingClip, #darlingStripped").trigger("play");
        $('#jamersonPlay').css({"display":"none"});
        $('#jamersonStop').css({"display":"flex"});
        $('#jamesJamerson').on("mouseover",function() {
            $("#darlingClip").prop("volume", 0);
            $("#darlingStripped").prop("volume", 1);
        });
        $('#jamesJamerson').on("mouseout",function() {
            $("#darlingClip").prop("volume", 1);
            $("#darlingStripped").prop("volume", 0);
        });
        $('#jamersonStop, #menuOpen, .pageNav').on("click",function() {
            $("#darlingClip, #darlingStripped").trigger("pause");
            $('#jamersonPlay').css({"display":"flex"});
            $('#jamersonStop').css({"display":"none"});
        });
    };
    $('#grahamPlay').on("click",function() {
        if (backTo == 7){
                grahamSample();
        }
    });
    function grahamSample() {
        $("#hairClip, #hairLoud").prop("currentTime", "0");
        $("#hairClip").prop("volume", .4);
        $("#hairLoud").prop("volume", 0);
        $("#hairClip, #hairLoud").trigger("play");
        $('#grahamPlay').css({"display":"none"});
        $('#grahamStop').css({"display":"flex"});
        $('#larryGraham').on("mouseover",function() {
            $("#hairClip").prop("volume", 0);
            $("#hairLoud").prop("volume", .9);
        });
        $('#larryGraham').on("mouseout",function() {
            $("#hairClip").prop("volume", .4);
            $("#hairLoud").prop("volume", 0);
        });
        $('#grahamStop, #menuOpen, .pageNav').on("click",function() {
            $("#hairClip, #hairLoud").trigger("pause");
            $('#grahamPlay').css({"display":"flex"});
            $('#grahamStop').css({"display":"none"});
        });
    };  
    $('#jacoPlay').on("click",function() {
        if (backTo == 8){
                jacoSample();
        }
    });
    function jacoSample() {
        $("#tracyClip").prop("currentTime", "0");
        $("#tracyClip").trigger("play");
        $('#jacoPlay').css({"display":"none"});
        $('#jacoStop').css({"display":"flex"});
        $('#jacoStop, #menuOpen, .pageNav').on("click",function() {
            $("#tracyClip").trigger("pause");
            $('#jacoPlay').css({"display":"flex"});
            $('#jacoStop').css({"display":"none"});
        });
    };
    $('#fingerstyle').on("mouseover",function() {
        $("#fingerClip").prop("volume", 1);
        $("#fingerClip").prop("currentTime", "0");
        $("#fingerClip").trigger("play");
        $("#fingerText").addClass("rotate1");
        $('#fingerstyle').on("mouseout",function() {
            $("#fingerClip").trigger("pause");
            $("#fingerText").removeClass("rotate1");
        });
    });
    $('#slap').on("mouseover",function() {
        $("#slapClip").prop("volume", 1);
        $("#slapClip").prop("currentTime", "0");
        $("#slapClip").trigger("play");
        $("#slapText").addClass("rotate2");
        $('#slap').on("mouseout",function() {
            $("#slapClip").trigger("pause");
            $("#slapText").removeClass("rotate2");
        });
    });
    $('#pick').on("mouseover",function() {
        $("#pickClip").prop("volume", 1);
        $("#pickClip").prop("currentTime", "0");
        $("#pickClip").trigger("play");
        $("#pickText").addClass("rotate3");
        $('#pick').on("mouseout",function() {
            $("#pickClip").trigger("pause");
            $("#pickText").removeClass("rotate3");
        });
    });
    let backTo = 1;
    function menuClose() {
        if(backTo == 1) {
            bassPage();
        }
        else if(backTo == 2) {
            fenderPage();
        }
        else if(backTo == 3) {
            rolePage();
        }
        else if(backTo == 4) {
            stylesPage();
        }
        else if(backTo == 5) {
            playersPage();
        }
        else if(backTo == 6) {
            jamersonPage();
        }
        else if(backTo == 7) {
            grahamPage();
        }
        else if(backTo == 8) {
            jacoPage();
        }
    };
    function menuPage1() {
        reset();
        $('#guideNav').stop().animate({left:"10%"}, 1000, "swing");
        setTimeout(function(){ $('#circleTitle').stop().animate({left:"5%"}, 1000, "swing")}, 400);
        $('#menu').stop().animate({left:"-6rem"}, 1000, "swing");
        setTimeout(function(){ $('#headstockBass').stop().animate({bottom:"0"}, 1000, "swing")}, 400);
    };
    function menuPage2() {
        reset();
        $('#guideNav').stop().animate({left:"10%"}, 1000, "swing");
        setTimeout(function(){$('#circleTitle').stop().animate({left:"5%"}, 1000, "swing")}, 400);
        $('#menuOpen').stop().animate({left:"-6rem"}, 1000, "swing");
        $('#menuClose').stop().animate({left:"3rem"}, 1000, "swing");
        $('#headstockBass').stop().animate({bottom:"0"}, 750, "swing");
    };
    function bassPage() {
        burgerOpen();
        reset();
        $('#paulChambers').stop().animate({left:"20%"}, 1000, "swing");
        $('#bassText').stop().animate({opacity:"1"}, 1000, "swing").css({"z-index":"33333"});
        $('#background1').stop().animate({opacity:"1"}, 1000, "swing");
        $('#fb1').css({"display":"flex","z-index":"7778"});
        backTo = 1;
    };
    function fenderPage() {
        burgerOpen();
        reset();
        $('#leoFender').stop().animate({left:"-5%"}, 1000, "swing");
        $('#fenderText').stop().animate({opacity:"1"}, 1000, "swing").css({"z-index":"33333"});
        $('#background2').stop().animate({opacity:"1"}, 1000, "swing");
        $('#fb2').css({"display":"flex","z-index":"7778"});
        backTo = 2;
    };
    function rolePage() {
        burgerOpen();
        reset();
        $('#vulfpeckBand').stop().animate({left:"0"}, 1000, "swing");
        $('#roleText').stop().animate({opacity:"1"}, 1000, "swing").css({"z-index":"33333"});
        $('#background3').stop().animate({opacity:"1"}, 1000, "swing");
        $('#fb3').css({"display":"flex","z-index":"7778"});
        backTo = 3;
    };
    function stylesPage() {
        burgerOpen();
        reset();
        $('#styleRow').stop().animate({bottom:"50%"}, 1000, "swing").css({"z-index":"33333"});
        $('#playHeading').stop().animate({top: "15%"}, 1000, "swing");
        $('#fb4').css({"display":"flex","z-index":"7778"});
        backTo = 4;
    };
    function playersPage() {
        burgerOpen();
        reset();
        $('#jamesJamerson').stop().animate({left:"25%", height:"65%"}, 1500, "swing");
        $('#larryGraham').stop().animate({left:"50%", height:"75%"}, 1500, "swing");
        $('#jacoPastorius').stop().animate({left:"78%", height:"52%"}, 1500, "swing");
        $('#influentialHeading').stop().animate({top: "15%"}, 1500, "swing");
        backTo = 5;
        $('#jamesJamerson').on("click",function() {
            if (backTo == 5){
                jamersonPage();
            }
        });
        $('#larryGraham').on("click",function() {
            if (backTo == 5){
                grahamPage();
            }
        });
        $('#jacoPastorius').on("click",function() {
            if (backTo == 5){
                jacoPage();
            }
        });
        $('#fb5').css({"display":"flex","z-index":"7778"});
    };
    function jamersonPage() {
        burgerOpen();
        reset();
        $('#jamesJamerson').stop().animate({left:"23%", height:"75%"}, 1000, "swing");
        $('#jamersonText').stop().animate({opacity:"1"}, 1000, "swing").css({"z-index":"33333"});
        $('#background4').stop().animate({opacity:"1"}, 1000, "swing");
        $('#fb6').css({"display":"flex","z-index":"7778"});
        $('#jamersonPlay').css({"display":"flex"});
        backTo = 6;
    };
    function grahamPage() {
        burgerOpen();
        reset();
        $('#larryGraham').stop().animate({left:"23%", height:"85%"}, 1000, "swing");
        $('#grahamText').stop().animate({opacity:"1"}, 1000, "swing").css({"z-index":"33333"});
        $('#background5').stop().animate({opacity:"1"}, 1000, "swing");
        $('#fb7').css({"display":"flex","z-index":"7778"});
        $('#grahamPlay').css({"display":"flex"});
        backTo = 7;
    };
    function jacoPage() {
        burgerOpen();
        reset();
        $('#jacoPastorius').stop().animate({left:"23%", height:"70%"}, 1000, "swing");
        $('#jacoText').stop().animate({opacity:"1"}, 1000, "swing").css({"z-index":"33333"});
        $('#background6').stop().animate({opacity:"1"}, 1000, "swing");
        $('#fb8').css({"display":"flex","z-index":"7778"});
        $('#jacoPlay').css({"display":"flex"});
        backTo = 8;
    };
    function reset() {
        $('.backgrounds, .textBox').stop().animate({opacity:"0"}, 1000, "swing");
        $('.textBox').css({"z-index":"3333"});
        $('.imgPos').stop().animate({"left":"-60%"}, 1000, "swing");
        $('#circleTitle, #guideNav').stop().animate({left:"-100%"}, 1500, "swing");
        $('#playHeading, #influentialHeading').stop().animate({top: "-25%"}, 1500, "swing");
        $('#styleRow').stop().animate({bottom:"-100%"}, 1000, "swing").css({"z-index":"33333"})
        $('#headstockBass').stop().animate({bottom:"-100%"}, 500, "swing").css({"z-index":"33333"});
        $('#menuClose').stop().animate({left:"-6rem"}, 1000, "swing");
        $('.pageNav').stop().css({"display":"none","z-index":"7777"});
        $('.playPauseBox').css({"display":"none","z-index":"7777"});
    };
    function burgerOpen() {
        $('#menuOpen').stop().animate({left:"3rem"}, 1000, "swing");
    };
    $('#menuOpen, .pageEnd').on("click",function() {
        menuPage2();
    });
    $('#menuClose').on("click",function() {
        menuClose();
    });
});

