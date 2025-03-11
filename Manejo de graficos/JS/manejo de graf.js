$(document).ready(function() {
    $(".menu_bar").click(function() {
        $("nav").toggleClass("menu-activo");

        if ($("nav").hasClass("menu-activo")) {
            $("nav").animate({ left: "0" });
        } else {
            $("nav").animate({ left: "-100%" });
        }
    });
});
