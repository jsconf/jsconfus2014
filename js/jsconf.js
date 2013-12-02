function scrollTo(_target) {
    var target = $(_target);
    if (target.length)
    {
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        setTimeout(function () { window.location.hash=(_target); }, 1000);
        return false;
    }
}

function activateMenu(key) {
	$(".nav .active").removeClass("active");
	$("#"+key).addClass("active");
}

$(function () {
    $(".speaker").hover(function () {
    	$(this).addClass("hover");
    }, function () {
    	$(this).removeClass("hover");
    })
    $("#directory .well").hover(function () {
      $(this).addClass("hover");
    }, function () {
      $(this).removeClass("hover");
    })

});